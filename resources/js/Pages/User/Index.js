import React, { useEffect, useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Input from "@/Components/Global/Input";
import Label from "@/Components/Global/Label";

import Authenticated from '@/Layouts/Authenticated';
import Edit from './Edit';
import { getAuthenticatedUser } from '../../Api';

export default function Index({auth}) {
   
    const [name, setName] = useState('kkkkk');
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAuthenticatedUser()
            .then(({data}) =>{
            console.log(data.me);
            setName(data.me.name);
            setEmail(data.me.email);
            setLoading(false);
        }).catch(console.error);

    }, []);

    const update = () => {
        setLoading(true);
        console.log(name, email, password, confirmPassword);
        setLoading(false);
    }

    return (
        <Authenticated auth={auth}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Profile
                    </h2>

                </div>
            }>
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                    <div className="flex flex-row py-2 sm:px-6">
                                <div className="w-1/3">
                                    User Details
                                </div>
                                <div className="w-2/3 bg-white space-x-8 space-y-8 shadow sm:rounded-lg">
                                    {
                                        !loading && <div className="flex flex-col space-y-5 p-5 w-full">
                                            <div className="flex flex-row space-x-6 w-full">
                                                <div className='flex-1'>
                                                    <Label forInput="name" value="Name" />
                                                    <Input
                                                        type="text"
                                                        name="name"
                                                        value={name || ''}
                                                        className="mt-1 w-full"
                                                        handleChange={(e) => setName(e.target.value)}
                                                    />
                                                </div>
                                                <div className='flex-1'>
                                                    <Label forInput="Email" value="Email" />

                                                    <Input
                                                        type="text"
                                                        name="email"
                                                        value={email || ''}
                                                        className="mt-1 block w-full text-gray-600 bg-gray-100"
                                                        isFocused={false}
                                                        disabled={true}
                                                        handleChange={(e) => console.log(e)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex flex-row space-x-6 w-full">
                                                <div className='flex-1'>
                                                    <Label forInput="password" value="Password" />
                                                    <Input
                                                        type="password"
                                                        name="password"
                                                        value={password || ''}
                                                        className="mt-1 w-full"
                                                        handleChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                                <div className='flex-1'>
                                                    <Label forInput="confirm_password" value="Confirm Password" />

                                                    <Input
                                                        type="password"
                                                        name="confirm_password"
                                                        value={ confirmPassword || ''}
                                                        className="mt-1 block w-full"
                                                        handleChange={(e) => {
                                                            setConfirmPassword(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex  flex-row-reverse space-x-6 w-full">
                                                <button onClick={() => update()} className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-blue-500 transition ease-in-out duration-150">
                                                    Update Profile
                                                </button>
                                            </div>
                                        </div>
                                    }
                                </div>
                    </div>
                    
                </div>
            </div>
        </Authenticated>
    );
}
