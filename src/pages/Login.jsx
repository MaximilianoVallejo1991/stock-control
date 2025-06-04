import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Aquí puedes hacer la solicitud a tu backend con fetch o axios
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-light-primary text-white dark:bg-dark-primary px-4 py-2 rounded-md hover:opacity-90 transition"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}
