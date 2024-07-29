import {announcements} from "./dataset/pengumuman_list.js"


export const generate_pengumuman = () => {
    const container = document.getElementById('announcements-container');

    announcements.forEach(announcement => {
        console.log(announcement)
        const announcementHtml = `
            <a href="${announcement.href}" style="text-decoration: none;">
                <div class="card-announc">
                    <div class="img-announc">
                        <img src="${announcement.imgSrc}" alt="Announcement Image">
                    </div>
                    <div class="card-content">
                        <div class="card-desc">
                            <p class="title semi-bold">${announcement.title}</p>
                            <p class="desc light">${announcement.desc}</p>
                        </div>
                        <div class="card-date-view">
                            <span>${announcement.date}</span> <span>|</span>
                            <span>${announcement.views}</span>
                        </div>
                    </div>
                </div>
            </a>
        `;
        container.innerHTML += announcementHtml;
    });
};

export const filterContent = () => {
    const searchBar = document.getElementById('searchBar').value.toLowerCase();
    const filterStartDate = new Date(document.getElementById('filterStartDate').value);
    const filterEndDate = new Date(document.getElementById('filterEndDate').value);
    const container = document.getElementById('announcements-container');
    let found = false

    container.innerHTML = ''; //reset value

    announcements.forEach(announcement => {
        const announcementDate = new Date(announcement.date);
        const title = announcement.title.toLowerCase();
        const desc = announcement.desc.toLowerCase();

        //logic pencarian
        if ((title.includes(searchBar) || desc.includes(searchBar) || !searchBar) &&
            (!isNaN(filterStartDate) ? announcementDate >= filterStartDate : true) &&
            (!isNaN(filterEndDate) ? announcementDate <= filterEndDate : true)) {
            
            found = true
            const announcementHtml = `
                <a href="${announcement.href}" style="text-decoration: none;">
                    <div class="card-announc">
                        <div class="img-announc">
                            <img src="${announcement.imgSrc}" alt="Announcement Image">
                        </div>
                        <div class="card-content">
                            <div class="card-desc">
                                <p class="title semi-bold">${announcement.title}</p>
                                <p class="desc light">${announcement.desc}</p>
                            </div>
                            <div class="card-date-view">
                                <span>${announcement.date}</span> <span>|</span>
                                <span>${announcement.views}</span>
                            </div>
                        </div>
                    </div>
                </a>
            `;

            container.innerHTML += announcementHtml;
        }
    });

    if (!found) {
        container.innerHTML = "<p style='text-align:center;'>Pencarian tidak ditemukan</p>"
    }
    
};

//load pertama kali
document.addEventListener('DOMContentLoaded', generate_pengumuman);

//mencari ketika mengetik
document.getElementById('searchBar').addEventListener('input', filterContent);