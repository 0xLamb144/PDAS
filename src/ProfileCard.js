function ProfileCard({ title, handle, image }) {
    // Destructed cards(props) for cleaner code, created new variables with the values taken from props(cards) object.
    // const { title, handle } = cards (DOES THE EXACT SAME THING it's 100% equivalent)

    return (
        <div>
            <img src={image} alt=" profile-images" />
            <div><a href={handle}>{title}</a></div>
        </div>
    );

}

export default ProfileCard;