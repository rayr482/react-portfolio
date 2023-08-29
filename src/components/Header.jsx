import Nav from './Nav';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div>
            <section>
                <header className='flex-row px-1'>
                    <div>
                        <h1>Raymond Rodriguez</h1>
                    </div>
                    <div>
                        <Nav
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                        />
                    </div>
                </header>
            </section>
        </div>
    );
}