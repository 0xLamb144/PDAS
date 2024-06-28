function ProfileCard({ title, handle }) {
    // Destructed cards(props) for cleaner code, created new variables with the values taken from props(cards) object.
    // const { title, handle } = cards (DOES THE EXACT SAME THING it's 100% equivalent)

    return (
        <div>
            <div><a href={handle}>{title}</a></div>
        </div>
    );

}

export default ProfileCard;