import { QuestionItem } from "./QuestionItem"


export const QuestionsList: React.FC = () => {
    return (
        <div className="flex flex-col gap-7 items-start">
            <QuestionItem title="How does cryptocurrency pricing work?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
            <QuestionItem title="Can I test the platform before being charged?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
            <QuestionItem title="How is my crypto account secured?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
        </div>
    )
}
