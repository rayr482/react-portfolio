import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import rdr2 from '../assets/images/img_rdr2.jpg';
import ed from '../assets/images/img_elden-ring.jpg'

export default function Project() {
    return (
        <div>
            <section id='work'>
                <div className='flex-row'>
                    <h2 className='section-title'>Work</h2>
                </div>

                <div className='card'>
                    <div className='card-content'>
                        <div className='card-img'>
                            <a href='https://linuscth.github.io/pokemon-index/'>
                                <img src={project1} className='my-2' style={{ width: '50%' }} alt='pokemon-index'/>
                            </a>
                        </div>

                        <div className='card-title'>
                            <h4>Pokemon Index</h4>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-content'>
                        <div className='card-img'>
                            <a href='https://murmuring-sierra-21351-123e19ae1f23.herokuapp.com/'>
                                <img src={project2} className='my-2' style={{ width: '50%' }} alt='git-a-job'/>
                            </a>
                        </div>

                        <div className='card-title'>
                            <h4>Git-A-Job</h4>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-content'>
                        <div className='card-img'>
                            <a href='#'>
                                <img src={rdr2} className='my-2' style={{ width: '50%' }} alt='project-3'/>
                            </a>
                        </div>

                        <div className='card-title'>
                            <h4>Project 3</h4>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-content'>
                        <div className='card-img'>
                            <a href='#'>
                                <img src={ed} className='my-2' style={{ width: '50%' }} alt='project-4'/>
                            </a>
                        </div>

                        <div className='card-title'>
                            <h4>Project 4</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}