﻿using System;
using System.Diagnostics;
using System.Threading;
using log4net;

namespace SharedComponents.Module
{
    public class ThreadHelper : IThreadHelper
    {
        public Thread RunSafeInNewThread(Action action, ILog logger, ThreadPriority priority = ThreadPriority.Normal)
        {
            var t = new Thread(() => RunSafe(action, logger)) {Priority = priority};
            t.Start();
            while (!t.IsAlive) { } //Wait for thread to be up and running
            return t;
        }

        static void RunSafe(Action action, ILog logger)
        {
            try
            {
                action();
            }
            catch (ThreadAbortException)
            {
                logger.Warn("Thread has been aborted");
            }
            catch (Exception ex)
            {
                logger.Error($"An unhandled exception occured in thread: {ex.Message}", ex);
            }
        }

        public void AbortThread(Thread thread, ILog logger, int msBeforeRealAbort = 1000)
        {
            if (thread == null || !thread.IsAlive) return;
            var abortInSeconds = msBeforeRealAbort > 0 ? msBeforeRealAbort / 1000 : 0;
            logger.Warn($"Wait max {abortInSeconds} sec for thread to stop by itself");
            Thread.Sleep(msBeforeRealAbort);
            if (thread.IsAlive) thread.Abort();
            else logger.Info("Thread stopped by itself");
        }

        public double GetCpuUsage(Thread thread)
        {
            if (thread == null) return -1;
            try
            {
                Process p = Process.GetCurrentProcess(); // getting current running process of the app
                foreach (ProcessThread pt in p.Threads)
                {
                    if (pt.Id == thread.ManagedThreadId)
                    {
                        return pt.TotalProcessorTime.TotalMilliseconds;
                    }
                    // use pt.Id / pt.TotalProcessorTime / pt.UserProcessorTime / pt.PrivilegedProcessorTime
                }
            }
            catch (Exception ex)
            {
                return -2;
            }
            return -3;
        }
    }
}