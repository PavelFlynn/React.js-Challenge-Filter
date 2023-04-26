
export function ShowData({ state }) {

    return (
        <div className='relative my-5'>
            <div>

                <div>
                    <p>Total Rows: <span className='text-lg font-semibold'>{state.length}</span></p>
                </div>
                <div className='text-left'>
                    {
                    <pre>{JSON.stringify(state, null, '2')}</pre>
                    }
                </div>

            </div>
        </div>
    )
}
