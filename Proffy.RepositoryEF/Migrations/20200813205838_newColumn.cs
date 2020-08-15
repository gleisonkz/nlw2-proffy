using Microsoft.EntityFrameworkCore.Migrations;

namespace Proffy.RepositoryEF.Migrations
{
    public partial class newColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_LessonSchedule_LessonID",
                table: "LessonSchedule");

            migrationBuilder.CreateIndex(
                name: "IX_LessonSchedule_LessonID",
                table: "LessonSchedule",
                column: "LessonID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_LessonSchedule_LessonID",
                table: "LessonSchedule");

            migrationBuilder.CreateIndex(
                name: "IX_LessonSchedule_LessonID",
                table: "LessonSchedule",
                column: "LessonID",
                unique: true);
        }
    }
}
