import Photo01 from 'assets/images/team/young-smiling-bussiness-woman-looking-at-camera-an.jpg'
import Photo02 from 'assets/images/team/comfortable-office-and-woman-indoors-it-with-a-lap.jpg'
import Photo03 from 'assets/images/team/african-american-male-entrepreneuer-smiling-to-cam.jpg'
import Photo04 from 'assets/images/team/beautiful-businesswoman-in-business-district.jpg'
import Photo05 from 'assets/images/team/portrait-of-happy-businessman-smiling-in-office.jpg'
import Photo06 from 'assets/images/team/young-smiling-man-with-a-laptop-in-his-hands.jpg'
import Photo07 from 'assets/images/team/smiling-businesswoman-sitting-on-office-stairs-sen.jpg'
import Photo08 from 'assets/images/team/young-white-woman-sitting-at-office-desk-smiling-t.jpg'
import { TeamItem } from './TeamItem'

export const TeamList:React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-6 items-center text-center md:grid-cols-2 xl:grid-cols-4">
            <TeamItem imgSrc={Photo01} name='Jennifer Alba' position='General Manager' />
            <TeamItem imgSrc={Photo02} name='Daria Maker' position='Designer' />
            <TeamItem imgSrc={Photo03} name='Myke Tyson' position='CEO' />
            <TeamItem imgSrc={Photo04} name='Maria Rabbit' position='Recruiter' />
            <TeamItem imgSrc={Photo05} name='Denis Thunderstorm' position='Risk Manager' />
            <TeamItem imgSrc={Photo06} name='Andrii Smaluniuk' position='Tech Lead' />
            <TeamItem imgSrc={Photo07} name='Yana Ponochovna' position='Marketologist' />
            <TeamItem imgSrc={Photo08} name='Diana Reyda' position='Accountant' />
        </div>
    )
}
