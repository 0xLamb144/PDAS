import ProfileCard from "./ProfileCard";

function App() {
    return <>
        <div>
            <div> Personal Digital Assets</div>
            <hr />
            {/*Attributes will be passed down here from each of our profile cards. (i.e ProfileCard (Components) file) */}
            <ProfileCard title="GitHub" handle='https://github.com/0xLamb144' />
            <ProfileCard title="LinkedIn" handle='https://www.linkedin.com/in/alvinjohnson144/' />
            <ProfileCard title='WakaTime' handle='https://wakatime.com/@Lamb144' />
        </div>
    </>
}

export default App;

