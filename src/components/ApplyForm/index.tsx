import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "components/UI/Button"
import { useSpring, animated } from '@react-spring/web'


export const ApplyForm: React.FC = () => {
    const springProps = useSpring({
        from: { x: 1000, opacity: 0 },
        to: { x: 0, opacity: 1 },
        config: {
            duration: 700
        }
    })
    return (
        <animated.section className="mb-16" style={springProps}>
            <div className="container">
                <div className='flex flex-col items-center text-center gap-4 mb-7'>
                    <span className="uppercase text-global-color-green text-sm">Apply form</span>
                    <h2 className="text text-3xl font-semibold">Apply for this job</h2>
                </div>
                <form className="text-gray flex flex-col gap-5">
                    <label className="flex flex-col gap-2">
                        Name
                        <input className="p-3" type="text" placeholder="Your name" />
                    </label>
                    <label className="flex flex-col gap-2">
                        Email
                        <input className="p-3" type="email" placeholder="Your Email" />
                    </label>
                    <label className="flex flex-col gap-2">
                        Phone
                        <input className="p-3" type="phone" placeholder="Your phone number" />
                    </label>
                    <label className="flex flex-col gap-2">
                        Resume/CV
                        <input className="bg-global-color-green text-global-color-secondary" type="file" />
                    </label>
                    <textarea className="p-3 text-global-color-secondary h-32 focus:outline-2 focus:outline-global-color-green max-h-72" placeholder="Add cover letter or anything else you want to share"></textarea>
                    <div className="flex items-center">
                        <label className="cursor-pointer relative">
                            <input className="w-5 h-5 border-global-color-green border-2 rounded-sm appearance-none" type="checkbox" id="apply-form-checkbox" />
                            <FontAwesomeIcon className="text-global-color-green w-4 h-4 absolute left-0.5 top-0.5 text-opacity-0 check-1" icon={faCheck} />
                        </label>
                        <p className="pl-4">I have read and agree to the Terms & Conditions</p>
                    </div>
                    <Button>
                        Submit Application
                    </Button>
                </form>
            </div>
        </animated.section>
    )
}
