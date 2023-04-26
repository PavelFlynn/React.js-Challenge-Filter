import { useState } from 'react';
import { Header, CallData, ShowData } from './components';

export default function App() {

    const [state, setState] = useState([]);

    return (
        <div className='relative'>
            <div className='relative min-h-screen flex justify-center items-center box-border'>
                <div className='flex-grow-0 flex-shrink basis-[600px] min-h-[200px] m-5 p-5 text-center bg-white rounded-xl'>

                    <Header label='02 : Challenge' />
                    <CallData setState={setState} />
                    {state.length > 0 ? (
                    <ShowData state={state} />
                    ) : null}

                </div>
            </div>
        </div>
    )
}
