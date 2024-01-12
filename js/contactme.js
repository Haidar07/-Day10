function submitForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phone-number').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('tm').value;

    // Email address yang ingin kita gunakan
    const emailAddress = 'haidarjf07@gmail.com';

    // Subject email
    const emailSubject = subject;
    
    // Pesan email 
    const emailBody = 'Nice to meet you sir.' + '\n' +
                      'My Name: ' + name + '\n' + 
                      'My Phone: ' + phoneNumber + '\n' + '\n' + '\n' +
                      'Message:\n' + message;

    // Agar tidak ada kolom yang tak terisi
    if (name == ''){
        return alert('name harus diisi bro')
    } else if (email == '') {
        return alert('emailnya jangan kosong dong')
    } else if (phoneNumber == '') {
        return alert ('Nomor hp nya bang')
    } else if (subject == '') {
        return alert ('subjectnya kosong tuh')
    } else if (message == '') {
        return alert('pesannya apa ? kosong tuh bang')
    }

    // Membuat URL Gmail khusus dengan parameter
    const gmailUrl = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=' + encodeURIComponent(emailAddress) +
                    '&su=' + encodeURIComponent(emailSubject) +
                    '&body=' + encodeURIComponent(emailBody);

    // Membuka Gmail di tab atau jendela baru
    window.open(gmailUrl, '_blank');

    // Membuat URL untuk membuka program email default
    // const mailtoUrl = 'mailto:' + encodeURIComponent(emailAddress) +
    //                 '?subject=' + encodeURIComponent(emailSubject) +
    //                 '&body=' + encodeURIComponent(emailBody);

    // Membuka program email default dengan nilai yang diisi
    // window.location.href = mailtoUrl;
}
