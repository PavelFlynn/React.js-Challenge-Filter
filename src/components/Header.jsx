
export default function Header(props) {

    return (
        <div className='relative my-2 mb-5'>
            <div className='relative text-center'>
                <h2 className='text-2xl font-semibold text-slate-800'>{props.label}</h2>
            </div>
        </div>
    )
}
