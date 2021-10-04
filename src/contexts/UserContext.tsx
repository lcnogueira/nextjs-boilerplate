import { createContext, useState, useCallback, useContext } from 'react'

type User = {
  name: string
  age: number
}

type UserContextData = {
  user: User
  setUser: (user: User) => void
}

export const UserContext = createContext({} as UserContextData)

type UserProviderProps = {
  children: React.ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  const handleSetUser = useCallback((user: User) => {
    setUser(user)
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: handleSetUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
