import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  firstName: string;
  role: string;
  // Add other user properties as needed
}

export interface AuthBehavior {
  loginFn: (credentials: { email: string; password: string }) => Promise<User>;
  logoutFn: () => Promise<void>;
  getMeFn: () => Promise<User>;
  registerFn: (data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => Promise<User>;
  requestPasswordResetFn: (email: string) => Promise<void>;
  resetPasswordFn: (token: string, newPassword: string) => Promise<void>;
  changePasswordFn: (oldPassword: string, newPassword: string) => Promise<void>;
}

interface AuthContextType {
  user: Partial<User> | null;
  loading: boolean;
  login: (credentials: { email: string; password: string }) => Promise<User>;
  logout: () => Promise<void>;
  me: () => Promise<User>;
  updateMe: () => Promise<void>;
  isLoggedIn: boolean;
  register: (data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => Promise<User>;
  requestPasswordReset: (email: string) => Promise<boolean>;
  resetPassword: (token: string, newPassword: string) => Promise<boolean>;
  changePassword: (
    oldPassword: string,
    newPassword: string,
  ) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
  behavior,
}: {
  children: React.ReactNode;
  behavior: AuthBehavior;
}) {
  const [user, setUser] = useState<Partial<User> | null>(null);
  const [loading, setLoading] = useState(true); // Add loading state

  // Add useEffect to load user on mount
  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await behavior.getMeFn();
        setUser(userData);
      } catch (error) {
        console.error('Failed to load user:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [behavior]);

  const login = useCallback(
    async (credentials: { email: string; password: string }) => {
      try {
        const userData = await behavior.loginFn(credentials);
        setUser(userData);
        return userData;
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
    [behavior],
  );

  const logout = useCallback(async () => {
    try {
      await behavior.logoutFn();
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  }, [behavior]);

  const me = useCallback(async () => {
    try {
      return await behavior.getMeFn();
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw error;
    }
  }, [behavior]);

  const updateMe = useCallback(async () => {
    try {
      const userData = await me();
      setUser(userData);
    } catch (error) {
      console.error('Failed to update user:', error);
      throw error;
    }
  }, [me]);

  const register = useCallback(
    async (data: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
    }) => {
      try {
        const userData = await behavior.registerFn(data);
        setUser(userData);
        return userData;
      } catch (error) {
        console.error('Registration failed:', error);
        throw error;
      }
    },
    [behavior],
  );

  const requestPasswordReset = useCallback(
    async (email: string) => {
      try {
        await behavior.requestPasswordResetFn(email);
        return true;
      } catch (error) {
        console.error('Password reset request failed:', error);
        return false;
      }
    },
    [behavior],
  );

  const resetPassword = useCallback(
    async (token: string, newPassword: string) => {
      try {
        await behavior.resetPasswordFn(token, newPassword);
        return true;
      } catch (error) {
        console.error('Password reset failed:', error);
        return false;
      }
    },
    [behavior],
  );

  const changePassword = useCallback(
    async (oldPassword: string, newPassword: string) => {
      try {
        await behavior.changePasswordFn(oldPassword, newPassword);
        return true;
      } catch (error) {
        console.error('Password change failed:', error);
        return false;
      }
    },
    [behavior],
  );

  const value = {
    user,
    loading, // Add loading to context value
    login,
    logout,
    me,
    updateMe,
    isLoggedIn: !!user,
    register,
    requestPasswordReset,
    resetPassword,
    changePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
