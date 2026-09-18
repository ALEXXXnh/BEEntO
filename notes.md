           #imgbox{
            position: relative;
            width: 100%;
            height: 100%;
            
            z-index: 888;
           }




                    .img {
            position: relative;
            z-index: 888;
            width: 1300px;
            height: 900px;
         }




    <div class="img" id="croissant"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4bf84630-e4eb-423a-bf98-2e7cd547a8e9/dmurep0-74749eb1-b8bc-48a0-9e92-21bee7161322.png/v1/fit/w_639,h_391/pusheen_croissant_by_my0tr_dmurep0-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzkxIiwicGF0aCI6Ii9mLzRiZjg0NjMwLWU0ZWItNDIzYS1iZjk4LTJlN2NkNTQ3YThlOS9kbXVyZXAwLTc0NzQ5ZWIxLWI4YmMtNDhhMC05ZTkyLTIxYmVlNzE2MTMyMi5wbmciLCJ3aWR0aCI6Ijw9NjM5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8SZk2854VbFDWuLzOHf3R4tCb0Em0_wfx-UGN2brBYg" alt="click food"></div>



                  #croissant{
                position: absolute;
                width: 2%;
                margin-top: 0%;
                margin-right: 2%;
                z-index: 889;
              } //idea with issues







    <div class="img" id="foods"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4bf84630-e4eb-423a-bf98-2e7cd547a8e9/dmurepd-66b805ce-b23a-425d-a7d8-833c338c2c55.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80YmY4NDYzMC1lNGViLTQyM2EtYmY5OC0yZTdjZDU0N2E4ZTkvZG11cmVwZC02NmI4MDVjZS1iMjNhLTQyNWQtYTdkOC04MzNjMzM4YzJjNTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iJ6K5hHQWDJPh39XurhtsaOz3yv4DNo-HWdOvAl2EnM" alt="click food"></div>

                  #foods{
                position: absolute;
                width: 73%;
                margin-top: 46%;
                z-index: 880;
              } //discarted idea






    const spoon = document.querySelector('.spoon');
spoon.addEventListener('click', () => {
    audio2.currentTime = 0;
    audio2.play();
});

const fork = document.querySelector('.fork');
fork.addEventListener('click', () => {
    audio2.currentTime = 0;
    audio2.play();
});
///discarted idea