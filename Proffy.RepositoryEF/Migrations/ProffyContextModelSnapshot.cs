﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Proffy.RepositoryEF;

namespace Proffy.RepositoryEF.Migrations
{
    [DbContext(typeof(ProffyContext))]
    partial class ProffyContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Proffy.Business.POCO.Connection", b =>
                {
                    b.Property<int>("ConnectionID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreatedAt");

                    b.Property<int>("TeacherID");

                    b.HasKey("ConnectionID");

                    b.HasIndex("TeacherID");

                    b.ToTable("Connection");
                });

            modelBuilder.Entity("Proffy.Business.POCO.Lesson", b =>
                {
                    b.Property<int>("LessonID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("Cost");

                    b.Property<string>("Subject");

                    b.Property<int>("TeacherID");

                    b.HasKey("LessonID");

                    b.HasIndex("TeacherID")
                        .IsUnique();

                    b.ToTable("Lesson");
                });

            modelBuilder.Entity("Proffy.Business.POCO.LessonSchedule", b =>
                {
                    b.Property<int>("LessonScheduleID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("From");

                    b.Property<int>("LessonID");

                    b.Property<int>("To");

                    b.Property<int>("WeekDay");

                    b.HasKey("LessonScheduleID");

                    b.HasIndex("LessonID")
                        .IsUnique();

                    b.ToTable("LessonSchedule");
                });

            modelBuilder.Entity("Proffy.Business.POCO.Teacher", b =>
                {
                    b.Property<int>("TeacherID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Avatar");

                    b.Property<string>("Bio");

                    b.Property<string>("Name");

                    b.Property<string>("WhatsApp");

                    b.HasKey("TeacherID");

                    b.ToTable("Teacher");
                });

            modelBuilder.Entity("Proffy.Business.POCO.Connection", b =>
                {
                    b.HasOne("Proffy.Business.POCO.Teacher", "Teacher")
                        .WithMany()
                        .HasForeignKey("TeacherID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Proffy.Business.POCO.Lesson", b =>
                {
                    b.HasOne("Proffy.Business.POCO.Teacher", "Teacher")
                        .WithOne("Lesson")
                        .HasForeignKey("Proffy.Business.POCO.Lesson", "TeacherID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Proffy.Business.POCO.LessonSchedule", b =>
                {
                    b.HasOne("Proffy.Business.POCO.Lesson", "Lesson")
                        .WithOne("LessonSchedule")
                        .HasForeignKey("Proffy.Business.POCO.LessonSchedule", "LessonID")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
