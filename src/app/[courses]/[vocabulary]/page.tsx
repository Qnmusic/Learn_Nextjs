
import LearnWord from "./(chooseCourses)/learnWord/page";
const Vocabulary = ({ params }: { params: { courses: string, vocabulary: string } }) => {

    return (

        <div>
            <LearnWord
                params={params}
            />
        </div>
    )
}

export default Vocabulary;