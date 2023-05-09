import '../Layout.css';

function Layout (options) {
    return (
        <div className='layout'>
            {options.children}
        </div>
    )
}

export default Layout;