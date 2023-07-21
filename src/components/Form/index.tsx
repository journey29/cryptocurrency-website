import { Description } from "components/Description"
import { Button } from "components/UI/Button"
import { Select } from "components/UI/Select"


export const Form: React.FC = () => {
    return (
        <section className="mb-16">
            <div className="container">
                <div className="flex flex-col items-center text-start md:items-center md:text-center">
                    <Description title="Let's talk about your project" caption="Get in touch" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
                    <div className="my-5 flex flex-col items-center text-center gap-8 md:flex-row">
                        <div>
                            <p className="font-semibold text-xl mb-2">Call Us</p>
                            <a className=" text-gray" href="tel:+62891234567">(+62) 891 234 567</a>
                        </div>
                        <div>
                            <p className="font-semibold text-xl mb-2">Email Us</p>
                            <a className=" text-gray" href="mailto:support@tokomoo.com">support@tokomoo.com</a>
                        </div>
                    </div>
                </div>
                <form className="flex flex-col gap-3">
                    <input className="p-3 text-gray" type="text" placeholder="First Name" />
                    <input className="p-3 text-gray" type="text" placeholder="Last Name" />
                    <input className="p-3 text-gray" type="email" placeholder="Email" />
                    <Select defaultValue="Choose Service" options={[
                        { value: 'outbound', name: 'Outbound Call Center' },
                        { value: 'inbound', name: 'Inbound Call Center' },
                        { value: 'telemarketing', name: 'Telemarketing Service' },
                        { value: 'support', name: 'Customer Support' },
                        { value: 'assistance', name: 'Virtual Assistance' },
                        { value: 'chat', name: 'Live Chat Support' }
                    ]} />
                    <textarea className="p-3 h-28 text-gray" placeholder="Message"></textarea>
                    <Button>
                        Send
                    </Button>
                </form>
            </div>
        </section>
    )
}
