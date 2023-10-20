var users = [
    {dp: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTtdIqtYuqVgljIfjw7CZwUkw-DpdLQ3-qCReBt-EHa-0h8ez36cmRBzaLp2EF89bvbtdiTy5L65TVr1mQ", story: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTtdIqtYuqVgljIfjw7CZwUkw-DpdLQ3-qCReBt-EHa-0h8ez36cmRBzaLp2EF89bvbtdiTy5L65TVr1mQ"},
    {dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROEI_zLGVefQ93x_zDXxlxPLY3v3WMY5vr3w&usqp=CAU", story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1sKJHmk4_iDSMCPKPNMp4Wm1maODFacs6bw&usqp=CAU"},
    {dp: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9e9ca0b5-a1f1-4a6d-913a-b236c4e96a99/dfpajt6-6a29a4a5-8ebd-4cb6-865e-9a33f11ce96b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzllOWNhMGI1LWExZjEtNGE2ZC05MTNhLWIyMzZjNGU5NmE5OVwvZGZwYWp0Ni02YTI5YTRhNS04ZWJkLTRjYjYtODY1ZS05YTMzZjExY2U5NmIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OqPLo7IuiSxhQA-wvIYbFlFp5AG-Vbtt7zg9xXFjt-k", story: "https://preview.redd.it/hot-billie-eilish-v0-pgd9pitzridb1.jpg?width=640&crop=smart&auto=webp&s=d9c68e2e0b7ff172ef0a55f5e5f67b73af1e692b"},
    {dp: "https://www.flickonclick.com/wp-content/uploads/2022/08/2022618104929712_FVfwnthaMAE85Zw-820x1024.jpg", story: "https://w0.peakpx.com/wallpaper/617/660/HD-wallpaper-janhvi-kapoor-bollywood-hot-thumbnail.jpg"}
]

var stories = document.querySelector("#stories")
var clutter = ""

users.forEach((item, idx) => {
    clutter = clutter + `<div class="story">
    <img id = "${idx}"src="${item.dp}">
 </div>`
})

stories.innerHTML = clutter

stories.addEventListener("click", (dets) => {
    document.querySelector("#screen").style.display = "block"
    document.querySelector("#screen").style.backgroundImage = `url(${users[dets.target.id].story})`
})
