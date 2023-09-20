

const TopChatInfo = ({ room, palette }) => {

    const styles= {
        header:{
            color: palette.fourth
        },
        topBar:{
            backgroundColor: palette.primary,
            padding: 5,
            boxShadow: '0px 1px 10px black',
        }
    }
    return (
        <div style={styles.topBar}>
            <h1 style={styles.header}>{room}</h1>
        </div>
    );
};

export default TopChatInfo;