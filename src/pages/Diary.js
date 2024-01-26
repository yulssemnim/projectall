import { useParams } from "react-router-dom";

const Diary = () => {
    const { id } = useParams();
    //console.log(params);
    return <div>
        <div>{id}번 일기</div>
        <div>Diary 페이지 입니다</div>
    </div>
}
export default Diary;