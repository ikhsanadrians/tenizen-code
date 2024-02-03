type ServiceData = {
    title: string;
    subtitle: string;
    description: string;
    icons: string;
};

const data: ServiceData[] = [
    {
       title : "Web Development",
       subtitle : "Kami Menerima Jasa Pembuatan Website",
       description : "Website khusus perusahaan, sekolah, atau personal. Desain pro, responsif, SEO, harga bersaing.",
       icons : "web"
    },
    {
       title : "Mobile Apps Development",
       subtitle : "Kami Menerima Jasa Pembuatan Aplikasi",
       description : "Solusi khusus untuk aplikasi perusahaan, pendidikan, atau personal. Desain pro, fungsional, harga bersaing. Wujudkan ide aplikasi Anda bersama kami!",
       icons : "mobile"
    },
    {
        title : "Service And Repair",
        subtitle : "Kami Menerima Jasa Servis Dan Perbaikan Laptop Atau PC",
        description : "Solusi terpercaya untuk servis laptop dan komputer. Fungsional dan terjangkau. Dari kebutuhan perusahaan hingga pengguna pribadi, kami hadir untuk memastikan perangkat Anda berjalan dengan baik!",
        icons : "servis"
    },
    {
        title: "Content Creator",
        subtitle : "Kami Menerima Jasa Content Creating",
        description :  "Solusi terpercaya untuk content creating",
        icons : "content"
    },
    {
        title : "Training And Course", 
        subtitle : "Kami Menerima Les Coding",
        description: "Solusi pembelajran coding dari nol, berdasarkan kurikulum yang kita buat",
        icons : "setting"
    }
];


export { data }