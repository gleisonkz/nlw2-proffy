﻿using System.Linq;

namespace Proffy
{
    public static class Utils        
    {
        public static int ConvertHourToMinutes(string time)
        {
            int hourInMinutes = time.Split(':')
                                    .Select(c => int.Parse(c))
                                    .Aggregate((hour, minute) => (hour * 60) + minute);
            return hourInMinutes;
        }
    }
}
