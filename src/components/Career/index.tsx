import { faChevronRight, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'components/UI/Button'
import { useSpring, animated } from '@react-spring/web'
import { CareerApplicationList } from './CareerApplicationList'
import { CareerRequirementsList } from './CareerRequirementsList'

export const Career: React.FC = () => {
    const springProps = useSpring({
        from: { x: -1000, opacity: 0 },
        to: { x: 0, opacity: 1 },
        config: {
            duration: 700
        }
    })
    return (
        <animated.section className='mb-16' style={springProps}>
            <div className="container">
                <div className='flex flex-col items-start text-start '>
                    <div className='pb-3 border-gray border-b'>
                        <div className='flex flex-col gap-4 items-start text-start'>
                            <h4 className='font-semibold text-4xl'>Frontend Developer</h4>
                            <div className='text-sm font-medium'>
                                <p className='mb-2'>Los Angeles, LA</p>
                                <p>Full time</p>
                            </div>
                        </div>
                        <div>
                            <Button>
                                Apply Now
                            </Button>
                        </div>
                    </div>
                    <div className='mt-6 flex flex-col md:flex-row md:gap-20 md:justify-center'>
                        <div className='flex flex-col gap-9 mb-10'>
                            <div>
                                <h5 className='text-xl font-semibold mb-3'>Who we are</h5>
                                <p className='text-gray'>We believe lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus feugiat elit vitae enim lacinia semper. Cras nulla lectus, porttitor vitae urna iaculis, malesuada tincidunt lectus.
                                    Proin nec tellus sit amet massa auctor imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis.
                                    Praesent urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet.
                                    Praesent vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.
                                </p>
                            </div>
                            <div>
                                <h5 className='text-xl font-semibold mb-3'>What we’re looking for</h5>
                                <p className='text-gray'>Cras nulla lectus, porttitor vitae urna iaculis, malesuada tincidunt lectus.
                                    Proin nec tellus sit amet massa auctor imperdiet id vitae diam.
                                    Aenean gravida est nec diam suscipit iaculis. Praesent urna velit.
                                </p>
                                <CareerRequirementsList />
                            </div>
                            <div>
                                <h5 className='text-xl font-semibold mb-3'>Applicant requirements</h5>
                                <CareerApplicationList />
                            </div>
                        </div>
                        <aside className='flex flex-col gap-10'>
                            <div className='flex flex-col gap-4 max-w-xl'>
                                <h5 className='text-xl font-semibold'>Need help?</h5>
                                <p className='text-gray'>Not sure exactly what we’re looking for or just want clarification? We’d be happy to chat with you and clear things up for you. Anytime</p>
                                <a className='flex items-center gap-3' href="tel:+5551234567">
                                    <button className='bg-global-color-secondary rounded-full w-7 h-7 flex items-center justify-center'>
                                        <FontAwesomeIcon className='text-global-color-green h-3' icon={faPhone} />
                                    </button>
                                    <span className='text-sm'>(555) 123-4567</span>
                                </a>
                                <a className='flex items-center gap-3' href="mailto:support@tokomoo.co">
                                    <button className='bg-global-color-secondary rounded-full w-7 h-7 flex items-center justify-center'>
                                        <FontAwesomeIcon className='text-global-color-green h-3' icon={faMailBulk} />
                                    </button>
                                    <span className='text-sm'>support@tokomoo.co</span>
                                </a>
                            </div>
                            <div className='flex flex-col gap-4 max-w-xl'>
                                <h5 className='text-xl font-semibold'>Don't see a job for you?</h5>
                                <p className='text-gray'>Do you feel like you belong working with Good Themes, but we just don’t have your dream job posted? No problem, just reach out.</p>
                                <Button>
                                    Apply Now
                                </Button>
                                <a className='text-global-color-green font-semibold text-sm flex items-center gap-3' href="#">
                                    <span>Let Us Know</span>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </a>
                            </div>

                        </aside>
                    </div>
                </div>
            </div>
        </animated.section>
    )
}

