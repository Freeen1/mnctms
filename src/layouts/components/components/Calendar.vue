<template>
    <div class="w-[345px] h-[325px] rounded-3xl p-6" style="background: rgba(247, 247, 247, 0.7);">
        <div class="h-[32px] flex items-center mb-4">
            <span class="text-lg">{{ currentMonth }}</span>
            <div class="ml-auto">
                <el-button class="border-0 w-[32px] h-[32px]" style="background: #FDFDFD;" @click="previousMonth">
                    <el-icon>
                        <ArrowLeftBold />
                    </el-icon>
                </el-button>
                <el-button class="border-0 w-[32px] h-[32px]" style="background: #FDFDFD;" @click="nextMonth">
                    <el-icon>
                        <ArrowRightBold />
                    </el-icon>
                </el-button>
            </div>
        </div>
        <div class="text-zinc-500">
            <table>
                <thead>
                    <tr>
                        <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="week in weeks" :key="week">
                        <td v-for="day in week" :key="day.date" :class="{ today: isToday(day.date) }">
                            {{ day.date.getDate() }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentDate: new Date(),
            daysOfWeek: ['一', '二', '三', '四', '五', '六', '日'],
        };
    },
    computed: {
        currentMonth() {
            const options = { month: 'long', year: 'numeric' };
            return this.currentDate.toLocaleDateString(undefined, options);
        },
        weeks() {
            const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
            const lastDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
            const startDate = new Date(firstDayOfMonth);
            startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());
            const endDate = new Date(lastDayOfMonth);
            endDate.setDate(endDate.getDate() + (6 - lastDayOfMonth.getDay()));

            const weeks = [];
            let currentDay = new Date(startDate);

            while (currentDay <= endDate) {
                const week = [];
                for (let i = 0; i < 7; i++) {
                    week.push({ date: new Date(currentDay) });
                    currentDay.setDate(currentDay.getDate() + 1);
                }
                weeks.push(week);
            }

            return weeks;
        },
    },
    methods: {
        previousMonth() {
            const prevMonthDate = new Date(this.currentDate);
            prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
            this.currentDate = new Date(prevMonthDate);
        },
        nextMonth() {
            const nextMonthDate = new Date(this.currentDate);
            nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
            this.currentDate = new Date(nextMonthDate);
        },
        isToday(date) {
            const today = new Date();
            return date.toDateString() === today.toDateString();
        },
    },
};
</script>
  
<style scoped>
.calendar {
    font-family: Arial, sans-serif;
    width: 300px;
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    text-align: center;
    padding: 5px;
}

.today {
    background-color: #CCEABB;
    @apply rounded-full font-bold
     text-zinc-800;
}
</style>