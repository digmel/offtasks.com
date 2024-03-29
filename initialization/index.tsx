import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {
  fetchClosedTasks,
  fetchTodaysTasks,
  fetchTomorrowsTasks,
  fetchUpcomingTasks,
  supabaseClient,
  updateTask,
} from "../backend";
import { AppState } from "../localState";
import { useDate } from "../hooks/useDate";

export const Initialization = ({ children }) => {
  const router = useRouter();
  const user = supabaseClient.auth.user();
  const { setAppState } = useContext(AppState);
  const { today, yesterday } = useDate();

  // Fetch tasks
  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      fetchTasks();
    }
  }, [user, router]);

  // Supabase Realtime Listener
  useEffect(() => {
    const listener = supabaseClient
      .from("tasks")
      .on("*", (payload) => {
        if (
          payload.eventType === "DELETE" ||
          payload.eventType === "UPDATE" ||
          payload.eventType === "INSERT"
        ) {
          fetchTasks();
        }
      })
      .subscribe();

    return () => {
      listener.unsubscribe();
    };
  }, []);

  const fetchTasks = async () => {
    const todayTasks = await fetchTodaysTasks();
    const tomorrowTasks = await fetchTomorrowsTasks();
    const upcomingTasks = await fetchUpcomingTasks();

    if (todayTasks) {
      todayTasks?.map((task: any) => {
        if (task.isComplete && task.date != today) {
          updateTask(
            task.id,
            task.content,
            task.isComplete,
            task.priority,
            "close",
            task.date
          );
        }
      });
    }

    if (tomorrowTasks) {
      tomorrowTasks?.map((task: any) => {
        if (task.date === yesterday || task.isComplete) {
          updateTask(
            task.id,
            task.content,
            task.isComplete,
            task.priority,
            "today",
            task.date
          );
        }
      });
    }

    if (upcomingTasks) {
      upcomingTasks?.map((task: any) => {
        if (task.isComplete) {
          updateTask(
            task.id,
            task.content,
            task.isComplete,
            task.priority,
            "close",
            task.date
          );
        }
      });
    }

    const completedTasks = (await fetchClosedTasks()).length;
    const totalTasks =
      completedTasks +
      todayTasks.length +
      tomorrowTasks.length +
      upcomingTasks.length;

    setAppState({
      todayTasks,
      tomorrowTasks,
      upcomingTasks,
      totalTasks,
      completedTasks,
    });
  };

  return children;
};
