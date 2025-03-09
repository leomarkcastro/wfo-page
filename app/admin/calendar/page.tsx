'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  ExternalLink,
  MapPin,
  Calendar,
  Clock,
  AlertCircle,
} from 'lucide-react';
import { EventsDataProvider } from '@/lib/dataProviders/events';
import moment from 'moment';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(moment());
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const result = await EventsDataProvider.getList({
          pagination: { page: 1, perPage: 100 },
          sorters: [],
          filters: [],
          search: '',
        });
        setEvents(result.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const prevMonth = () => {
    setCurrentDate(moment(currentDate).subtract(1, 'month'));
  };

  const nextMonth = () => {
    setCurrentDate(moment(currentDate).add(1, 'month'));
  };

  const goToToday = () => {
    setCurrentDate(moment());
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const startOfMonth = moment(currentDate).startOf('month');
    const endOfMonth = moment(currentDate).endOf('month');
    const startDay = startOfMonth.day(); // 0 for Sunday, 1 for Monday, etc.
    const daysInMonth = endOfMonth.date();

    // Create array for all days in the month
    const days = [];

    // Add empty cells for days before the start of the month
    for (let i = 0; i < startDay; i++) {
      days.push({ day: null, date: null });
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = moment(startOfMonth).date(i);
      days.push({ day: i, date });
    }

    return days;
  };

  // Get events for a specific day
  const getEventsForDay = (date) => {
    if (!date) return [];

    return events.filter((event) => {
      const eventStart = moment(Number(event.startDate));
      // If event has no end date, set it to start date + 1 hour
      const eventEnd = event.endDate
        ? moment(Number(event.endDate))
        : moment(Number(event.startDate)).add(1, 'hour');
      return date.isBetween(eventStart, eventEnd, 'day', '[]');
    });
  };

  // Handle event click to show dialog
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  // Handle edit button click to open in new tab
  const handleEditClick = () => {
    if (selectedEvent) {
      window.open(`/admin/events/edit/${selectedEvent.id}`, '_blank');
      setIsDialogOpen(false);
    }
  };

  const days = generateCalendarDays();

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <Button variant='outline' size='icon' onClick={prevMonth}>
            <ChevronLeft className='h-4 w-4' />
          </Button>
          <h2 className='text-xl font-bold'>
            {currentDate.format('MMMM YYYY')}
          </h2>
          <Button variant='outline' size='icon' onClick={nextMonth}>
            <ChevronRight className='h-4 w-4' />
          </Button>
          <Button variant='outline' onClick={goToToday}>
            Today
          </Button>
        </div>
        <Link href='/admin/events/add'>
          <Button>
            <Plus className='mr-2 h-4 w-4' /> Add Event
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Events Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className='flex h-96 items-center justify-center'>
              <p>Loading events...</p>
            </div>
          ) : (
            <div className='grid grid-cols-7 gap-1'>
              {/* Day headers */}
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className='p-2 text-center font-medium'>
                  {day}
                </div>
              ))}

              {/* Calendar days */}
              {days.map((day, index) => {
                const dayEvents = getEventsForDay(day.date);
                const isToday = day.date && day.date.isSame(moment(), 'day');

                return (
                  <div
                    key={index}
                    className={`min-h-24 rounded-md border p-1 ${
                      !day.day ? 'bg-gray-50' : ''
                    } ${isToday ? 'border-blue-200 bg-blue-50' : ''}`}
                  >
                    {day.day && (
                      <>
                        <div className='text-right text-sm font-medium'>
                          {day.day}
                        </div>
                        <div className='mt-1 max-h-20 space-y-1 overflow-y-auto'>
                          {dayEvents.map((event) => (
                            <div
                              key={event.id}
                              className={`cursor-pointer truncate rounded p-1 text-xs ${
                                event.isCancelled
                                  ? 'bg-red-100 line-through'
                                  : 'bg-blue-100'
                              }`}
                              onClick={() => handleEventClick(event)}
                              title={event.title}
                            >
                              {event.title}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Event Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className='sm:max-w-md'>
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle
                  className={selectedEvent.isCancelled ? 'line-through' : ''}
                >
                  {selectedEvent.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedEvent.description}
                </DialogDescription>
              </DialogHeader>
              <div className='space-y-3 py-4'>
                {selectedEvent.isCancelled && (
                  <div className='flex items-center gap-2 text-red-500'>
                    <AlertCircle className='h-4 w-4' />
                    <div className='font-medium'>
                      This event has been cancelled
                    </div>
                  </div>
                )}
                <div className='flex items-center gap-2'>
                  <Calendar className='h-4 w-4 text-muted-foreground' />
                  <div>
                    <span className='font-medium'>Date: </span>
                    {moment(Number(selectedEvent.startDate)).format(
                      'MMM DD, YYYY',
                    )}
                    {selectedEvent.endDate &&
                      !moment(Number(selectedEvent.startDate)).isSame(
                        moment(Number(selectedEvent.endDate)),
                        'day',
                      ) &&
                      ` - ${moment(Number(selectedEvent.endDate)).format('MMM DD, YYYY')}`}
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <Clock className='h-4 w-4 text-muted-foreground' />
                  <div>
                    <span className='font-medium'>Time: </span>
                    {moment(Number(selectedEvent.startDate)).format(
                      'hh:mm A',
                    )}{' '}
                    -{' '}
                    {selectedEvent.endDate
                      ? moment(Number(selectedEvent.endDate)).format('hh:mm A')
                      : moment(Number(selectedEvent.startDate))
                          .add(1, 'hour')
                          .format('hh:mm A')}
                  </div>
                </div>
                {selectedEvent.location && (
                  <div className='flex items-center gap-2'>
                    <MapPin className='h-4 w-4 text-muted-foreground' />
                    <div>
                      <span className='font-medium'>Location: </span>
                      {selectedEvent.location}
                    </div>
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button onClick={handleEditClick}>
                  <ExternalLink className='mr-2 h-4 w-4' />
                  Edit Event
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
