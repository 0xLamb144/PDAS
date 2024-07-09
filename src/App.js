import ProfileCard from "./ProfileCard";
import GitHubImage from "./img/github.jpeg";
import LinkedInImage from "./img/linkedIn.jpeg";
import WakaTimeImage from "./img/wakaTIme.png";



function App() {
    return <>
        <div>
            <div> Personal Digital Assets</div>
            <hr />

            {/*Attributes will be passed down here from each of our profile cards. (i.e ProfileCard (Components) file) */}
            <ProfileCard title="GitHub" handle='https://github.com/0xLamb144' image={GitHubImage} />
            <ProfileCard title="LinkedIn" handle='https://www.linkedin.com/in/alvinjohnson144/' image={LinkedInImage} />
            <ProfileCard title='WakaTime' handle='https://wakatime.com/@Lamb144' image={WakaTimeImage} />
        </div>
    </>
}

export default App;

