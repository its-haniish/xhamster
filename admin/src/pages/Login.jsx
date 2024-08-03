import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'
import { Loading } from '../components/Loading';
import { setCookie } from '../utils/cookies';

const Login = () => {
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = e => {
        e.preventDefault();
        const { username, password } = formState;
        if (!username || !password) return toast.error('Please fill all fields');

        if (username !== process.env.REACT_APP_BASE_USERNAME || password !== process.env.REACT_APP_BASE_PASSWORD) {
            return toast.error('Invalid credentials');
        }

        setCookie('xHamsterAdmin', JSON.stringify({ username, password }));
        dispatch({ type: 'login' });
        toast.success('Login successful', { duration: 1500 });
        navigate('/');
    };


    const handleChange = e => setFormState({ ...formState, [e.target.name]: e.target.value });

    useEffect(() => {

    }, [])

    return (
        <>
            {isLoading && <Loading />}
            <main className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg sm:max-w-sm md:max-w-md lg:max-w-lg">
                    <h1 className="text-2xl font-bold text-center">xHamster</h1>
                    <form className="space-y-4" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={handleChange}
                                readOnly={isLoading}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={handleChange}
                                className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                                readOnly={isLoading}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login
