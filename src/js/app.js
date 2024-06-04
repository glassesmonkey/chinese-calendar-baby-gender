const { getLunar } = chinese_lunar_calendar;
const genderPredictionTable = {
    "Age 18": {"Month 1": "boy", "Month 2": "girl", "Month 3": "boy", "Month 4": "girl", "Month 5": "boy", "Month 6": "boy", "Month 7": "girl", "Month 8": "girl", "Month 9": "boy", "Month 10": "boy", "Month 11": "girl", "Month 12": "girl"},
    "Age 19": {"Month 1": "girl", "Month 2": "boy", "Month 3": "girl", "Month 4": "boy", "Month 5": "boy", "Month 6": "boy", "Month 7": "girl", "Month 8": "girl", "Month 9": "boy", "Month 10": "girl", "Month 11": "girl", "Month 12": "boy"},
    "Age 20": {"Month 1": "boy", "Month 2": "girl", "Month 3": "girl", "Month 4": "boy", "Month 5": "girl", "Month 6": "girl", "Month 7": "boy", "Month 8": "boy", "Month 9": "girl", "Month 10": "boy", "Month 11": "boy", "Month 12": "girl"},
    "Age 21": {"Month 1": "boy", "Month 2": "girl", "Month 3": "girl", "Month 4": "boy", "Month 5": "boy", "Month 6": "girl", "Month 7": "girl", "Month 8": "girl", "Month 9": "boy", "Month 10": "boy", "Month 11": "boy", "Month 12": "girl"},
    "Age 22": {"Month 1": "girl", "Month 2": "boy", "Month 3": "boy", "Month 4": "boy", "Month 5": "boy", "Month 6": "boy", "Month 7": "girl", "Month 8": "girl", "Month 9": "girl", "Month 10": "girl", "Month 11": "boy", "Month 12": "girl"},
    // Continue filling in the data for ages 23 to 45
    "Age 23": {"Month 1": "boy", "Month 2": "girl", "Month 3": "girl", "Month 4": "girl", "Month 5": "boy", "Month 6": "boy", "Month 7": "boy", "Month 8": "boy", "Month 9": "girl", "Month 10": "girl", "Month 11": "girl", "Month 12": "boy"},
    "Age 24": {"Month 1": "girl", "Month 2": "girl", "Month 3": "boy", "Month 4": "girl", "Month 5": "boy", "Month 6": "boy", "Month 7": "girl", "Month 8": "boy", "Month 9": "girl", "Month 10": "girl", "Month 11": "boy", "Month 12": "boy"},
    "Age 25": {"Month 1": "girl", "Month 2": "boy", "Month 3": "boy", "Month 4": "girl", "Month 5": "boy", "Month 6": "girl", "Month 7": "girl", "Month 8": "boy", "Month 9": "girl", "Month 10": "boy", "Month 11": "boy", "Month 12": "girl"},
    "Age 26": {"Month 1": "boy", "Month 2": "girl", "Month 3": "boy", "Month 4": "girl", "Month 5": "boy", "Month 6": "boy", "Month 7": "boy", "Month 8": "girl", "Month 9": "boy", "Month 10": "girl", "Month 11": "girl", "Month 12": "girl"},
    "Age 27": {"Month 1": "girl", "Month 2": "girl", "Month 3": "girl", "Month 4": "girl", "Month 5": "boy", "Month 6": "girl", "Month 7": "boy", "Month 8": "boy", "Month 9": "boy", "Month 10": "girl", "Month 11": "boy", "Month 12": "boy"},
    "Age 28": {"Month 1": "boy", "Month 2": "boy", "Month 3": "girl", "Month 4": "girl", "Month 5": "boy", "Month 6": "boy", "Month 7": "girl", "Month 8": "girl", "Month 9": "boy", "Month 10": "boy", "Month 11": "girl", "Month 12": "girl"},
    "Age 29": {"Month 1": "girl", "Month 2": "boy", "Month 3": "boy", "Month 4": "girl", "Month 5": "girl", "Month 6": "boy", "Month 7": "girl", "Month 8": "boy", "Month 9": "girl", "Month 10": "girl", "Month 11": "boy", "Month 12": "boy"},
    "Age 30": {"Month 1": "girl", "Month 2": "boy", "Month 3": "girl", "Month 4": "boy", "Month 5": "boy", "Month 6": "girl", "Month 7": "boy", "Month 8": "boy", "Month 9": "girl", "Month 10": "boy", "Month 11": "girl", "Month 12": "girl"},
    "Age 31": {"Month 1": "boy", "Month 2": "girl", "Month 3": "boy", "Month 4": "girl", "Month 5": "girl", "Month 6": "boy", "Month 7": "boy", "Month 8": "boy", "Month 9": "girl", "Month 10": "girl", "Month 11": "girl", "Month 12": "boy"},
    "Age 32": {"Month 1": "girl", "Month 2": "boy", "Month 3": "boy", "Month 4": "boy", "Month 5": "girl", "Month 6": "girl", "Month 7": "girl", "Month 8": "girl", "Month 9": "girl", "Month 10": "boy", "Month 11": "boy", "Month 12": "boy"},
    "Age 33": {"Month 1": "girl", "Month 2": "boy", "Month 3": "girl", "Month 4": "girl", "Month 5": "boy", "Month 6": "boy", "Month 7": "boy", "Month 8": "girl", "Month 9": "boy", "Month 10": "girl", "Month 11": "girl", "Month 12": "boy"},
    "Age 34": {"Month 1": "boy", "Month 2": "boy", "Month 3": "girl", "Month 4": "girl", "Month 5": "boy", "Month 6": "girl", "Month 7": "girl", "Month 8": "boy", "Month 9": "girl", "Month 10": "boy", "Month 11": "boy", "Month 12": "girl"},
    "Age 35": {"Month 1": "girl", "Month 2": "girl", "Month 3": "boy", "Month 4": "boy", "Month 5": "boy", "Month 6": "girl", "Month 7": "girl", "Month 8": "boy", "Month 9": "girl", "Month 10": "boy", "Month 11": "girl", "Month 12": "boy"},
    "Age 36": {"Month 1": "boy", "Month 2": "boy", "Month 3": "girl", "Month 4": "girl", "Month 5": "boy", "Month 6": "boy", "Month 7": "girl", "Month 8": "girl", "Month 9": "boy", "Month 10": "girl", "Month 11": "girl", "Month 12": "boy"},
    "Age 37": {"Month 1": "girl", "Month 2": "boy", "Month 3": "girl", "Month 4": "boy", "Month 5": "girl", "Month 6": "boy", "Month 7": "girl", "Month 8": "boy", "Month 9": "boy", "Month 10": "girl", "Month 11": "boy", "Month 12": "girl"},
    "Age 38": {"Month 1": "girl", "Month 2": "girl", "Month 3": "boy", "Month 4": "girl", "Month 5": "boy", "Month 6": "girl", "Month 7": "boy", "Month 8": "boy", "Month 9": "girl", "Month 10": "girl", "Month 11": "boy", "Month 12": "boy"},
    "Age 39": {"Month 1": "girl", "Month 2": "boy", "Month 3": "girl", "Month 4": "boy", "Month 5": "girl", "Month 6": "boy", "Month 7": "boy", "Month 8": "boy", "Month 9": "girl", "Month 10": "boy", "Month 11": "girl", "Month 12": "girl"},
    "Age 40": {"Month 1": "girl", "Month 2": "boy", "Month 3": "girl", "Month 4": "boy", "Month 5": "girl", "Month 6": "boy", "Month 7": "girl", "Month 8": "boy", "Month 9": "girl", "Month 10": "girl", "Month 11": "boy", "Month 12": "boy"},
    "Age 41": {"Month 1": "boy", "Month 2": "girl", "Month 3": "boy", "Month 4": "girl", "Month 5": "boy", "Month 6": "boy", "Month 7": "girl", "Month 8": "girl", "Month 9": "boy", "Month 10": "girl", "Month 11": "girl", "Month 12": "boy"},
    "Age 42": {"Month 1": "boy", "Month 2": "boy", "Month 3": "girl", "Month 4": "boy", "Month 5": "girl", "Month 6": "girl", "Month 7": "girl", "Month 8": "girl", "Month 9": "boy", "Month 10": "girl", "Month 11": "boy", "Month 12": "boy"},
    "Age 43": {"Month 1": "boy", "Month 2": "girl", "Month 3": "girl", "Month 4": "boy", "Month 5": "boy", "Month 6": "boy", "Month 7": "girl", "Month 8": "girl", "Month 9": "girl", "Month 10": "boy", "Month 11": "boy", "Month 12": "girl"},
    "Age 44": {"Month 1": "boy", "Month 2": "boy", "Month 3": "girl", "Month 4": "boy", "Month 5": "boy", "Month 6": "girl", "Month 7": "boy", "Month 8": "girl", "Month 9": "girl", "Month 10": "girl", "Month 11": "girl", "Month 12": "boy"},
    "Age 45": {"Month 1": "boy", "Month 2": "boy", "Month 3": "girl", "Month 4": "girl", "Month 5": "boy", "Month 6": "girl", "Month 7": "girl", "Month 8": "boy", "Month 9": "boy", "Month 10": "girl", "Month 11": "girl", "Month 12": "boy"}
  
  };

// 用来计算从出生日期到今天的年龄
function getAge(birthday) {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
    }
    return age;
}

// 使用chinese-lunar库将公历日期转换为农历月份
function convertToLunarMonth(gregorianDate) {

    const date = new Date(gregorianDate);
    const lunar = getLunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
    return lunar.lunarMonth;
}

// 根据母亲的年龄和怀孕的农历月份来预测婴儿的性别
function calculateChildGender(motherAge, pregnancyMonth) {
    const ageKey = `Age ${motherAge}`;
    const monthKey = `Month ${pregnancyMonth}`;
    
    // if (!genderPredictionTable[ageKey]) {
    // return 'Invalid mother age';
    // }
    
    const predictedGender = genderPredictionTable[ageKey][monthKey];
    return predictedGender || 'Data not available for this month';
}

// 绑定HTML按钮点击事件，执行性别预测功能
document.getElementById('calculateButton').addEventListener('click', function() {
    const motherBirthday = document.getElementById('birthday').value;
    const pregnancyTime = document.getElementById('pregnancyTime').value;

    const motherAge = getAge(motherBirthday);
    if (motherAge < 18 || motherAge > 45) {
        console.log(`mother age Invalid`);
        document.getElementById('message').innerText = 'Age must be between 18 and 45.';
        return;
    }
    const pregnancyMonth = convertToLunarMonth(pregnancyTime);

    const gender = calculateChildGender(motherAge, pregnancyMonth);
    document.getElementById('message').innerText = `Predicted Gender: ${gender}`;
    // 显示结果，例如在控制台打印或更新页面元素
    console.log(`Predicted Gender: ${gender}`); // 可以替换为页面上的输出方式
});