//import { MAX_LENGTH_TITLE_CONST } from '../../constants/maxlength.title.constant';

type ShotTitleProp = {
    title: string;
    maxLength: number;
};

const ShotTitle: React.FC<ShotTitleProp> = ({ title, maxLength }) => {
    // const [details, setDetails] = useState(false);
    // const isLong = title.length > maxLength;
    // const newShotTitle = isLong ? title.slice(0, maxLength) + '...' : title;

    return (
        <>
            {title.length > maxLength ? title.slice(0, maxLength) + '...' : title}
            {/* {details ? <div>{newShotTitle}</div> : <div>{title}</div>}
            {isLong && (
                <button style={{ marginTop: '10px', cursor: 'pointer' }} onClick={() => setDetails(prev => !prev)}>
                    {details ? 'Hide Details' : 'Show Details'}
                </button>
            )} */}
        </>
    );
};
export default ShotTitle;
