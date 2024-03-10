document.addEventListener('DOMContentLoaded', function() {
    const scheduleDiv = document.querySelector('.schedule');
    const schedule = [
        {'time': '9:00', 'title': '校長先生からのおことば', 'teacher': '塁先生', 'detailLink': 'greet.html'},
        {'time': '9:15 - 10:05', 'title': '化粧口座', 'teacher': '牧野先生', 'detailLink': 'makeUp.html'},
        {'time': '10:15 - 10:55', 'title': 'プレゼントの選び方', 'teacher': '安達先生', 'detailLink': 'choicePresent.html'},
        {'time': '11:05 - 12:05', 'title': '調理実習', 'teacher': '牧野先生', 'detailLink': 'cooking.html'},
        // 昼休みはリンクなし
        {'time': '13:05 - 14:05', 'title': '人生とは', 'teacher': 'こころ先生', 'detailLink': 'life.html'},
        {'time': '14:15 - 15:15', 'title': 'ジョハリの窓', 'teacher': '村上先生', 'detailLink': 'johari.html'},
        {'time': '15:25 - 16:25', 'title': '後輩力', 'teacher': '塁先生', 'detailLink': 'juniorSkill.html'}
    ];

    schedule.forEach(function(item) {
        const classDiv = document.createElement('div');
        classDiv.classList.add('class');

        const title = document.createElement('h2');
        title.textContent = item.title;
        const time = document.createElement('p');
        time.textContent = item.time;
        const teacher = document.createElement('p');
        teacher.textContent = item.teacher;
        
        classDiv.appendChild(title);
        classDiv.appendChild(time);
        if (item.teacher) classDiv.appendChild(teacher);
        const link = document.createElement('a');
        if (item.detailLink) {
            link.href = item.detailLink;
            link.textContent = '詳細を見る';
            classDiv.appendChild(link);
        }
        
        scheduleDiv.appendChild(classDiv);
    });
});
