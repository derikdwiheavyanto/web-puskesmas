import {announcements} from "./dataset/pengumuman_list.js"


let generate_pengumuman = ()=>{
    const container = document.getElementById('announcements-container');

    announcements.forEach(announcement => {
        
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

        console.log("oke")
    });
}

document.addEventListener('DOMContentLoaded', generate_pengumuman);