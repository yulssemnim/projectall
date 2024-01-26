import { useSearchParams } from "react-router-dom";
import Header from "../component/Header";
import Editor from "../component/Editor";

const Home = () => {
    //const [searchParams,setsearchParams] =useSearchParams();
    //console.log(searchParams.get('sort'));
    return (
    <div>
        <Editor
            initData={{
                date: new Date().getTime(),
                emotionId :1,
                content:'이전에 작성했던 일기'
            }}
            onSubmit={() => alert('작성완료 버튼을 클릭') } />
    </div>
    );
}
export default Home;