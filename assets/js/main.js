
const $$ = document.querySelector.bind(document);

window.onscroll = () => {      
    const scrollTop = $$('.back-to-top')
    this.scrollY > 300 ? scrollTop.style.display = "block" :
        scrollTop.style.display = "none"
}


const app = {

    slider: [{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's1',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
                        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's2',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động', 
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's3',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's4',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's5',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's6',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's7',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's8',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's9',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's10',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's11',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's12',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's13',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's14',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's15',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's16',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's17',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's18',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's19',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's20',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's21',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's22',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's23',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 's24',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    }],

    newlyUpdatedStories: [{
        image: './assets/img/manga/dao_kiem_than_vuc.jpg',
        id: '1',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
                        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '2',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động', 
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '3',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '4',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '5',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '6',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '7',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '8',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '9',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '10',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '11',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '12',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '13',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '14',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '15',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '16',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '17',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '18',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '19',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '20',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '21',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '22',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '23',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: '24',
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    }],

    newStories: [{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 25,
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 25,
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 25,
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 25,
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 25,
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 26,
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 27,
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        id: 28,
        name: 'Chuyển sinh thành slime',
        chaps: 69,
        minutes: 1,
        like: 69,
        heart: 6969,
        category :{
            humor: 'Hài Hước',
            magic: 'Phép Thuật',
            fantasy: 'Giả Tưởng',
            action: 'Hành Động',
        },
        content: `Sau này, chỉ có làm, chịu khó , cần cù thì bù siêng năng, chỉ có làm thì mới có ăn.
        Những cái loại không làm mà đòi có ăn thì ăn đầu ****, nhớ, ăn ***, thế cho nó dễ`,
        status: 'Đang cập nhật',
        view: 6969,
        rating: 9.2,
    }],

    topRankDonate: [{
        mgr: './assets/img/mgr.png',   
        box: './assets/img/box.png',
        frame: './assets/img/frame-violet.png',
        nameFrame: '🐷Pig',
        armorial: './assets/img/rank_silver.png',
        boxYear: './assets/img/2021.png',
        level: 142,
        nameDonate: 'Sơn Đẹp Trai',
        dogCoin: 100,  
        color: {
            name: 'var(--lv-140)',
            Bg_Level: 'var(--lv-140)',  
        }, 
        display:{
            Mgr:'',
            Box:'none',
            Armorial: 'none',
            Silver: 'none',
            BoxYear:''
        }
    },{
        mgr: './assets/img/mgr.png',
        box: './assets/img/box.png',
        frame: './assets/img/frame.png',
        nameFrame: '',
        armorial: './assets/img/gold.png',
        boxYear: './assets/img/2021.png',  
        level: 132,
        nameDonate: 'Sơn Đẹp Trai',
        dogCoin: 100,
        color: {
            name: 'var(--lv-130)',
            Bg_Level: 'var(--lv-130)',  
        },
        display:{
            Mgr:'none',
            Box:'',
            Frame: 'none',
            Armorial: '',
            BoxYear:''
        }
       
    },{
        mgr: './assets/img/mgr.png',
        box: './assets/img/box.png',
        frame: './assets/img/frame.png',
        nameFrame: '😻Fox',
        armorial: './assets/img/rank_silver.png',
        boxYear: './assets/img/2021.png',  
        level: 126,
        nameDonate: 'Sơn Đẹp Trai',
        dogCoin: 100,
        color: {
            name: 'var(--lv-116)',
            Bg_Level: 'var(--lv-116)',  
        },
        display:{
            Mgr:'none',
            Box:'none',
            Frame: '',
            Armorial: 'none',
            BoxYear:''
        }
       
    },{
        mgr: './assets/img/mgr.png',
        box: './assets/img/box.png',
        frame: './assets/img/frame.png',
        nameFrame: '',
        armorial: './assets/img/moneyG.png',
        boxYear: './assets/img/2021.png',  
        level: 85,
        nameDonate: 'Sơn Đẹp Trai',
        dogCoin: 100,
        color: {
            name: 'var(--lv-81)',
            Bg_Level: 'var(--lv-81)',  
        },
        display:{
            Mgr:'',
            Box:'none',
            Frame: 'none',
            Armorial: '',
            BoxYear:'none'
        }
       
    },{
        mgr: './assets/img/mgr.png',
        box: './assets/img/box.png',
        frame: './assets/img/frame.png',
        nameFrame: '',
        armorial: './assets/img/rank_silver.png',
        boxYear: './assets/img/2021.png',  
        level: 107,
        nameDonate: 'Sơn Đẹp Trai',
        dogCoin: 100,
        color: {
            name: 'var(--lv-105)',
            Bg_Level: 'var(--lv-105)',  
        },
        display:{
            Mgr:'',
            Box:'',
            Frame: 'none',
            Armorial: '',
            BoxYear:'none'
        }
       
    },{
        mgr: './assets/img/mgr.png',
        box: './assets/img/box.png',
        frame: './assets/img/frame-blue.png',
        nameFrame: '🐺Wolf',
        armorial: './assets/img/rank_silver.png',
        boxYear: './assets/img/2021.png',  
        level: 6,
        nameDonate: 'Sơn Đẹp Trai',
        dogCoin: 100,
        color: {
            name: 'var(--lv-4)',
            Bg_Level: 'var(--lv-4)',  
        },
        display:{
            Mgr:'none',
            Box:'none',
            Frame: '',
            Armorial: 'none',
            BoxYear:'none'
        }
       
    },{
        mgr: './assets/img/mgr.png',
        box: './assets/img/box.png',
        frame: './assets/img/frame.png',
        nameFrame: '😻Fox',
        armorial: './assets/img/rank_silver.png',
        boxYear: './assets/img/2021.png',  
        level: 2,
        nameDonate: 'Sơn Đẹp Trai',
        dogCoin: 100,
        color: {
            name: 'var(--lv-1)',
            Bg_Level: 'var(--lv-1)',  
        },
        display:{
            Mgr:'none',
            Box:'',
            Frame: 'none',
            Armorial: 'none',
            BoxYear:''
        }
       
    },{
        mgr: './assets/img/mgr.png',   
        box: './assets/img/box.png',
        frame: './assets/img/frame-violet.png',
        nameFrame: '🐷Pig',
        armorial: './assets/img/rank_silver.png',
        boxYear: './assets/img/2021.png',
        level: 142,
        nameDonate: 'Sơn Đẹp Trai',
        dogCoin: 100,  
        color: {
            name: 'var(--lv-140)',
            Bg_Level: 'var(--lv-140)',  
        }, 
        display:{
            Mgr:'',
            Box:'none',
            Armorial: 'none',
            Silver: 'none',
            BoxYear:''
        }
    },{
        mgr: './assets/img/mgr.png',
        box: './assets/img/box.png',
        frame: './assets/img/frame.png',
        nameFrame: '',
        armorial: './assets/img/gold.png',
        boxYear: './assets/img/2021.png',  
        level: 132,
        nameDonate: 'Sơn Đẹp Trai',
        dogCoin: 100,
        color: {
            name: 'var(--lv-130)',
            Bg_Level: 'var(--lv-130)',  
        },
        display:{
            Mgr:'none',
            Box:'',
            Frame: 'none',
            Armorial: '',
            BoxYear:''
        }
       
    },{
        mgr: './assets/img/mgr.png',
        box: './assets/img/box.png',
        frame: './assets/img/frame.png',
        nameFrame: '😻Fox',
        armorial: './assets/img/rank_silver.png',
        boxYear: './assets/img/2021.png',  
        level: 126,
        nameDonate: 'Sơn Đẹp Trai',
        dogCoin: 100,
        color: {
            name: 'var(--lv-116)',
            Bg_Level: 'var(--lv-116)',  
        },
        display:{
            Mgr:'none',
            Box:'none',
            Frame: '',
            Armorial: 'none',
            BoxYear:''
        }
       
    },],

    history: [{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',    
    }],

    comments:[{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        comment: 'Gọi tớ là bức 🧱 dơ bẩn vì tớ cần 💅',
        bg_Url: '&quot;https://zalo-api.zadn.vn/api/emoticon/sprite?eid=42434&amp;size=130&amp;checksum=fd8694b197812bef275bb08619483836&quot;',
        bg_Size: '1170px 65px',
        bg_width: '65px',
        bg_height: '65px',
        class: 'stickerInterval_1500',
        margin: '0 auto',

    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        comment: 'Với Toàn đi "tù thì ngon" vì "toàn thì ngu".',
        bg_Url: './assets/img/sprite_sticker/sprite.png',
        bg_Size: '1300px 65px',
        bg_width: '65px',
        bg_height: '65px',
        class: 'stickerInterval_1500',
        margin: '0 auto',
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        comment: 'Có làm thì mới có ăn, trải qua đắng cay ngọt bùi.',
        bg_Url: 'https://zalo-api.zadn.vn/api/emoticon/sprite?eid=42435&size=130&checksum=f82fc522d0d222f59d72f9969911cb24',
        bg_Size: '1170px 65px',
        bg_width: '65px',
        bg_height: '65px',
        class: 'stickerInterval_2500',
        margin: '0 auto',
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg',
        comment: 'Tona ông hoàng down code',
        bg_Url: 'https://zalo-api.zadn.vn/api/emoticon/sprite?eid=42425&size=130&checksum=9428c65fa111c0358cc03c1120c08f9e',
        bg_Size: '1300px 65px',
        bg_width: '65px',
        bg_height: '65px',
        class: 'stickerInterval_2500',
        margin: '0 auto',
    }],

    storyTranslationGroup: [{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg'
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg'
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg'
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg'
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg'
    },{
        image: './assets/img/manga/chuyen_sinh_thanh_slime.jpg'
    }],

    render: function(){

        const slider = this.slider.map(x => {
            return `
                <div class="popular-thumb-item col-12 tlt" data-template="${x.id}">
                    <img src="${x.image}" alt="">
                    
                <span id="${x.id}" class="tooltip">
                <div class="tooltip-top">
                    <img src="${x.image}" class="img-tooltip" alt="" width="90" height="120">
                    <div class="tl-b interactive">
                        <p class="tl-n">${x.name}</p>
                        <p>Tình Trạng: ${x.status}</p>
                        <p><i class="far fa-eye"></i> Lượt xem: ${x.view}</p>
                        <p>Đánh giá: ${x.rating} <i class="fas fa-star"></i></p>
                    </div>
                </div>
                <div class="border-center"></div>
                <div class="categories">
                    <div class="ctgy">Thể Loại: </div>
                    <div class="category">${x.category.humor}</div>
                    <div class="category">${x.category.magic}</div>
                    <div class="category">${x.category.fantasy}</div>
                    <div class="category">${x.category.action}</div>
                    <div class="category">${x.category.humor}</div>
                    <div class="category">${x.category.magic}</div>
                    <div class="category">${x.category.fantasy}</div>
                    <div class="category">${x.category.action}</div>
                </div>
                <div class="border-center"></div>
                <p class="tl-content">Nội dung : ${x.content}</p>
                </span>

            </div>

            `
        })

        const nus = this.newlyUpdatedStories.map(x => {
            return `
            <div class="thumb-item-flow col-6 col-md-3 tlt" data-template="${x.id}">
                
                    <img src="${x.image}" alt="">
                    <div class="content-left2 ">
                        <div class="margin">
                            <p class="p1 p">${x.name}</p>
                            <p class="p2 p">Chap ${x.chaps}: ${x.minutes} minutes ago</p>
                            <div class="interactive">         
                                <i class="fas fa-thumbs-up"></i><span class="p">&nbsp;${x.like}</span>
                                &nbsp;<i class="fas fa-heart"></i><span class="p">&nbsp;${x.heart}</span>  
                            </div>
                        </div>
                    </div>

                    <span id="${x.id}" class="tooltip">
                        <div class="tooltip-top">
                            <img src="${x.image}" class="img-tooltip" alt="" width="70" height="120">
                            <div class="tl-b interactive">
                                <p class="tl-n">${x.name}</p>
                                <p>Tình Trạng: ${x.status}</p>
                                <p><i class="far fa-eye"></i> Lượt xem: ${x.view}</p>
                                <p>Đánh giá: ${x.rating} <i class="fas fa-star"></i></p>
                            </div>
                        </div>
                        <div class="border-center"></div>
                        <div class="categories">
                            <div class="ctgy">Thể Loại: </div>
                            <div class="category">${x.category.humor}</div>
                            <div class="category">${x.category.magic}</div>
                            <div class="category">${x.category.fantasy}</div>
                            <div class="category">${x.category.action}</div>
                            <div class="category">${x.category.humor}</div>
                            <div class="category">${x.category.magic}</div>
                            <div class="category">${x.category.fantasy}</div>
                            <div class="category">${x.category.action}</div>
                        </div>
                        <div class="border-center"></div>
                        <p class="tl-content">Nội dung : ${x.content}</p>
                    </span>

               
            </div>
            `
        })
   
        const ns = this.newStories.map(x => {
            return `
            <div class="thumb-item-flow col-6 col-md-3 tlt" data-template="${x.id}">
                <img src="${x.image}" alt="">
                    <div class="content-left2">
                        <div class="margin">
                            <p class="p1 p">${x.name}</p>
                            <p class="p2 p">Chap ${x.chaps}: ${x.minutes} minutes ago</p>
                            <div class="interactive">         
                                <i class="fas fa-thumbs-up"></i><span class="p">&nbsp;${x.like}</span>
                                &nbsp;<i class="fas fa-heart"></i><span class="p">&nbsp;${x.heart}</span>  
                            </div>
                        </div>
                    </div>

                    <span id="${x.id}" class="tooltip">
                    <div class="tooltip-top">
                        <img src="${x.image}" class="img-tooltip" alt="" width="70" height="120">
                        <div class="tl-b interactive">
                            <p class="tl-n">${x.name}</p>
                            <p>Tình Trạng: ${x.status}</p>
                            <p><i class="far fa-eye"></i> Lượt xem: ${x.view}</p>
                            <p>Đánh giá: ${x.rating} <i class="fas fa-star"></i></p>
                        </div>
                    </div>
                    <div class="border-center"></div>
                    <div class="categories">
                        <div class="ctgy">Thể Loại: </div>
                        <div class="category">${x.category.humor}</div>
                        <div class="category">${x.category.magic}</div>
                        <div class="category">${x.category.fantasy}</div>
                        <div class="category">${x.category.action}</div>
                        <div class="category">${x.category.humor}</div>
                        <div class="category">${x.category.magic}</div>
                        <div class="category">${x.category.fantasy}</div>
                        <div class="category">${x.category.action}</div>
                    </div>
                    <div class="border-center"></div>
                    <p class="tl-content">Nội dung : ${x.content}</p>
                </span>


            </div>
            `
        })

        const trd = this.topRankDonate.map(x => {
            return  `
            <div class="content-top-donate">
            <div class="info">
                <div class="info-left">
                    <span class="medal-admin" style="display:${x.display.Mgr}">
                        <img src="${x.mgr}" alt="">
                    </span>
                    <span class="medal-admin-wrap" style="display:${x.display.BoxYear}">
                        <img src="${x.boxYear}" alt="">
                    </span>
                    <span class="medal-admin" style="display:${x.display.Box}">
                        <img src="${x.box}" alt="">
                    </span>
                    <span class="frame-medal-admin" style="background-image: url('${x.frame}'); display:${x.display.Frame}">
                        <span class="frame-medal-name">${x.nameFrame}</span>
                    </span>
                    <span class="medal-admin" style="display:${x.display.Armorial}">
                        <img src="${x.armorial}" alt="">
                    </span>
                    <span class="level" style="background:${x.color.Bg_Level}">Lv.${x.level}</span>
                    <span class="top-donate-name" style="color:${x.color.name}">${x.nameDonate}</span>
                </div>
                <div class="info-right">
                    <span class="top-rank-coin">${x.dogCoin}</span>
                </div>
                
            </div>
        </div>  
            `
        })

        const his = this.history.map(x => {
            return `
             <div class="content-right">
                    <div class="ct-1" data-template="${x.id}">
                        <img src="${x.image}" alt="">
                        <div class="information">
                            <p class="info-1 p">Sơn đẹp trai</p>
                            <p class="info-2 p">Chap 99:</p>
                            <p class="info-3 p">lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit modi soluta consequuntur minus tempora laboriosam, aspernatur alias ab id laborum illum non perferendis architecto eum aut corporis autem sapiente.</p>
                        </div>
                    </div>
                </div>
            `
        })

        const cmt = this.comments.map(x => {
            return `

                 <div class="content-right2">

                    <div class="info-comments">

                        <div class="info-comments-l">
                            <img src="${x.image}" alt="">
                            <p>Sơn đẹp trai</p>
                        </div>

                        <div class="info-comments-r">
                            <p>69 minutes ago</p>
                        </div>

                    </div>

                    <div class="content-comments">
                        <p>${x.comment}</p>
                    </div>
                    
                    <div class="${x.class}" style="width: ${x.bg_width}; height: ${x.bg_height}; background-image: url(${x.bg_Url}); background-position: 0px 0px; background-repeat: repeat-x; margin: ${x.margin};  background-size: ${x.bg_Size};"></div>
                    

                    <div class="info-comic">
                        <p class="name-comic">Truyện : Sơn Đẹp Trai</p>
                        <p class="chapter-number">Chap69</p>
                    </div>

                </div>

            `
        })

        const str = this.storyTranslationGroup.map(x =>{
            return `
                <div class="info-team">
                    <img src="${x.image}" alt=""">
                    <p class='p'>Sơn đẹp trai</p>
                </div>
            `
        })

        const reders = () => {
            $$('.owl-carousel').innerHTML = slider.join('')
            $$('.newlyUpdatedStories').innerHTML = nus.join('')
            $$('.newStories').innerHTML = ns.join('')
            $$('.top-rank-donate').innerHTML = trd.join('')
            $$('.history-content').innerHTML = his.join('')
            $$('.comments').innerHTML = cmt.join('')
            $$('.story-translation-group').innerHTML = str.join('')  
        }
        reders()
        
    },

    effect: function(){

        let navBarMobile = () => {
            $(document).ready(() => {
                $('#hamburger-menu').click(() => {
                    $('#hamburger-menu').toggleClass('active')
                    $('#nav-menu').toggleClass('active')
                })
            })
        }
        navBarMobile()

        let tippys = () => {
            tippy('.tlt',{
                allowHTML: true,
                animation: 'scale',
                followCursor: true,
                delay: 200,
                maxWidth: 580,
                arrow: true,
                hideOnClick: false,
                content(e) {
                    const id = e.getAttribute('data-template');
                    const template = document.getElementById(id);
                    return template.innerHTML;
                },
            })
        }
        tippys()
             
        let owl = () => {

            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:15,
                nav:true,
                autoplay:true,
                autoplayTimeout:7000,
                autoplayHoverPause:true,
                slideBy: 4,
                navText: false,
                smartSpeed: 500,
                responsive:{
                    0:{
                        items:2
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            })
        }
        owl()
        
        let sticker = () => {     
            const layoutWidth = 1300
            const totalImages = 20
            const imageWidth = layoutWidth / totalImages
            let count = 1
            let positionX = 0
           
            const stickerInterval_1500 = document.querySelectorAll('.stickerInterval_1500');
            
                [...(stickerInterval_1500)].forEach(x => {
                    setInterval(function() {         
                        positionX = -(imageWidth * count)
                        x.style.backgroundPosition = `${positionX}px 0`
                        count++
                        count = (count >= totalImages) ? 0 : count
                    }, 1500 / totalImages)
                });

                const stickerInterval_2500 = document.querySelectorAll('.stickerInterval_2500');

                [...(stickerInterval_2500)].forEach(x => {
                    setInterval(function() {         
                        positionX = -(imageWidth * count)
                        x.style.backgroundPosition = `${positionX}px 0`
                        count++
                        count = (count >= totalImages) ? 0 : count
                    }, 2200 / totalImages)
                });
        }
        sticker()

        let darkMode = () => {
            const options = {
                bottom: '20px', 
                right: 'unset',
                left: '3px', 
                time: '.8s',
                mixColor: '#fff', 
                backgroundColor: '#fff',  
                buttonColorDark: '#100f2c',  
                buttonColorLight: '#fff', 
                saveInCookies: false,
                label: '🌓', 
                autoMatchOsTheme: true, 
                saveInCookies: true, 
            };
        
            const darkmode = new Darkmode(options);
            darkmode.showWidget();
        }
        darkMode()
 
    },

   
    start: function(){
        this.render()
        this.effect()
    },

}

app.start()