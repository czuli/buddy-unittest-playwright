// Prosty JavaScript do testowania Playwright

document.addEventListener('DOMContentLoaded', function() {
    let clickCount = 0;
    
    // Elementy DOM
    const clickMeBtn = document.getElementById('click-me');
    const toggleTextBtn = document.getElementById('toggle-text');
    const showAlertBtn = document.getElementById('show-alert');
    const counter = document.getElementById('counter');
    const toggleContent = document.getElementById('toggle-content');
    const testForm = document.getElementById('test-form');
    const submitBtn = document.getElementById('submit-btn');
    
    // Obsługa kliknięcia przycisku "Kliknij mnie!"
    clickMeBtn.addEventListener('click', function() {
        clickCount++;
        counter.textContent = clickCount;
        
        // Zmiana koloru przycisku po kliknięciu
        this.style.backgroundColor = '#e74c3c';
        setTimeout(() => {
            this.style.backgroundColor = '#3498db';
        }, 200);
    });
    
    // Obsługa przełączania tekstu
    toggleTextBtn.addEventListener('click', function() {
        if (toggleContent.classList.contains('hidden')) {
            toggleContent.classList.remove('hidden');
            this.textContent = 'Ukryj tekst';
        } else {
            toggleContent.classList.add('hidden');
            this.textContent = 'Przełącz tekst';
        }
    });
    
    // Obsługa alertu
    showAlertBtn.addEventListener('click', function() {
        alert('To jest testowy alert!');
    });
    
    // Obsługa formularza
    testForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email) {
            alert(`Dziękujemy ${name}! Twoja wiadomość została zapisana.`);
            
            // Wyczyszczenie formularza
            this.reset();
            
            // Zmiana tekstu przycisku
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Wysłano!';
            submitBtn.style.backgroundColor = '#27ae60';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '#27ae60';
            }, 2000);
        } else {
            alert('Proszę wypełnić wszystkie wymagane pola!');
        }
    });
    
    // Obsługa formularza nagrania
    const recordingForm = document.getElementById('recording-form');
    const recordingSubmitBtn = document.getElementById('recording-submit-btn');
    const recordingStatus = document.getElementById('recording-status');
    const recordingInfo = document.getElementById('recording-info');
    const progressFill = document.getElementById('progress-fill');
    
    recordingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('recording-title').value;
        const duration = document.getElementById('recording-duration').value;
        const quality = document.getElementById('recording-quality').value;
        const format = document.querySelector('input[name="recording-format"]:checked');
        const description = document.getElementById('recording-description').value;
        const consent = document.getElementById('recording-consent').checked;
        
        if (title && duration && quality && format && consent) {
            // Pokaż status nagrania
            recordingStatus.classList.remove('hidden');
            recordingInfo.textContent = `Rozpoczynanie nagrania: ${title}`;
            
            // Symulacja postępu nagrania
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += Math.random() * 15;
                if (progress > 100) progress = 100;
                
                progressFill.style.width = progress + '%';
                recordingInfo.textContent = `Nagrywanie... ${Math.round(progress)}%`;
                
                if (progress >= 100) {
                    clearInterval(progressInterval);
                    recordingInfo.textContent = `Nagranie zakończone! Plik: ${title}.${format.value}`;
                    progressFill.style.backgroundColor = '#27ae60';
                    
                    // Reset po 5 sekundach
                    setTimeout(() => {
                        recordingStatus.classList.add('hidden');
                        this.reset();
                        progressFill.style.width = '0%';
                        progressFill.style.backgroundColor = '#27ae60';
                    }, 5000);
                }
            }, 500);
            
        } else {
            alert('Proszę wypełnić wszystkie wymagane pola i zaakceptować zgodę!');
        }
    });
    
    // Obsługa nawigacji
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Symulacja nawigacji
            alert(`Kliknięto link: ${href}`);
            
            // Zmiana koloru aktywnego linku
            navLinks.forEach(l => l.style.backgroundColor = '');
            this.style.backgroundColor = '#ecf0f1';
        });
    });
    
    // Dodatkowe funkcje testowe
    window.testFunctions = {
        getClickCount: () => clickCount,
        resetCounter: () => {
            clickCount = 0;
            counter.textContent = '0';
        },
        isToggleVisible: () => !toggleContent.classList.contains('hidden'),
        getFormData: () => {
            return {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
        },
        getRecordingData: () => {
            return {
                title: document.getElementById('recording-title').value,
                duration: document.getElementById('recording-duration').value,
                quality: document.getElementById('recording-quality').value,
                format: document.querySelector('input[name="recording-format"]:checked')?.value,
                description: document.getElementById('recording-description').value,
                consent: document.getElementById('recording-consent').checked
            };
        },
        isRecordingInProgress: () => !recordingStatus.classList.contains('hidden'),
        getRecordingProgress: () => {
            const progressText = recordingInfo.textContent;
            const match = progressText.match(/(\d+)%/);
            return match ? parseInt(match[1]) : 0;
        }
    };
    
    console.log('Strona testowa Playwright załadowana!');
});
