import PageContainer from "@/components/PageContainer";
import ResultQuiz from "@/components/Quiz/ResultQuiz";

export default function TestPage() {
  return (
    <PageContainer>
      <div className="mt-10">
        <ResultQuiz />
      </div>
    </PageContainer>
  );
}
