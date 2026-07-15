import StudentTeacherCard from "./StudentTeacherCard";
import CourseStatisticsCard from "./CourseStatisticsCard";

export default function OverviewRow() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
      <StudentTeacherCard />
      <CourseStatisticsCard />
    </section>
  );
}