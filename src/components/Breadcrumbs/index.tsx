
type Props = {
    title: string,
    text?: string
}

export const Breadcrumbs: React.FC<Props> = ({ title, text }) => {
    return (
        <div className="bg-global-color-secondary w-full mb-10 py-16">
            <div className="container">
                <div className="flex items-center justify-center">
                    <div className="text-center max-w-3xl w-full">
                        <h3 className="mb-6 font-bold text-4xl relative pb-6 after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-auto after:bg-global-color-green after:w-1/2 after:h-[1px] md:after:w-1/5">{title}</h3>
                        <p className=" text-gray">
                            {text ? (
                                text
                            ) : (
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
