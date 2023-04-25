import { Header, ShowData } from './components';
import {getData} from './api/services'

export default function App() {
    getData()

    return (
        <div className='relative'>
            <div className='relative min-h-screen flex justify-center items-center box-border'>
                <div className='flex-grow-0 flex-shrink basis-[600px] min-h-[200px] m-5 p-5 text-center bg-white rounded-xl'>

                    <Header label='02 : Challenge' />
                    <ShowData />

                </div>
            </div>
        </div>
    )
}
