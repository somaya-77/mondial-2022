// Variables 

// Access-Control-Allow-Origin: http
response = jsonify(book)
response.headers.add('Access-Control-Allow-Origin')
return response;


const token = "65699e02fe1540c8a7dd78c7c5016316";
const baseUrl = "https://api.football-data.org/v4/competitions/2000";

function getStandings () {

    const url = `${baseUrl}/standings`;

    axios.get(url, {
        headers: {
            "X-Auth-Token": token
        }
    })
    .then((response) => {

        console.log("msjhytgwe")
        console.log(response.data)

        const standings = response.data.standings

        for(standing of standings) {

            let tableContent = "";

            for(row of standing.table){
                tableContent += `  
                <!-- TEAM -->
                <li class="list-group-item">

                    <div class="row">
                        <div class="col-sm-4">
                            <span class="flag">
                                <img class="rounded-circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAAB1CAMAAAAP6UEOAAAAclBMVEUAAADOESb////HAADvuyL9+O389OL88t399uf779T//vz88dr78Nf66sf+/Pf99+rutwD55rv67M3zzG3tsgD22Zf44a3yxlj447X33aL004bzz3fyymfsrQD558H22JzxwUDwvjXxw0zyxl/114/0z35gg8DOAAADqklEQVR4nO2Z247jNgxAp25IXa2bx7IczzqZTPL/v1h6N9v2tQCFZgCelwQJYB4oFEkpb398L97+b4H/iPj2RXz7Ir59Ed++iG9fxLcv4tsX8e2L+PZFfPsivn0R376Ib1/Ety/i2xfx7Yv49kV8+/L25/fibfhe9PJ1qAp2eG4nX2/HtbYOD2b2DcEeL9GFAIXe2hB4A7D6aq1rQTsosxav1GCxVPqMMwSjbzDauClVN2gFiLoMrqbJ+egZ15jPVzulFFxTAjAeNRoPkNIVUCnPt8RcvrahQgcmnd61bsaMJueo30/JaKUVNssUh219wWtEA59pAU05TGlgFCzpEwylhgeuMGy+SPngI05psWN0pkQTTFjSB0avqBhzheHyDejoh9dqSacVWj5osJ7SoiJ945Bry3H5+gIOyXhNp7T5+/l8vvuN3q+oNOV18Uxx+PIBDJAyJcSpfKWDWzlROmgXgfKEKwybLxUBoHqG7sfa0ukg1frDIH1CJY2toPH5khotJcLqT0+SmQNCdBFN5ArDVn/NqFEB9bVi0t++IyKAQj2al6u/g6KCRr5q9//47urwpcrBFoXP1z99c/n8nRCl/fRVwFUdOPOXqhltN0DdpqfuV6N0OHYhdTiuMGy+gWoZoosaa33Wh3nVOpItDRZsExrjfEbZQC3ZDRs+fd1jcE65Y8exRWHM3yMXRtjrMv/ccanMS92BygbgC+Yv0PDgAYec563k99N7Ldu8Z4vgaa54xfksKoODfdTcrsVcx3JtrZ7tgB4j35mIrV+QFlCZvcxj3tpUoEx5y+P9QoWZ8gFfrV+AilqFsN8uy14e+9e07I+Sl8ttD0Hp6LgSgm2epFNQUHBXm/+o+/3+db/v9cNs6gwOmo4vNk9CNEWXAN7ZW52qOaezqVO7BRrOrKH5ITItMJOvw+KcC3kcnD63Nbcptzk/ohlMDnQeKlwnIibfnbquaXus+cjkzzyex3ylDhLcrMZmFMadJxBfPVPFj2YYK404NKSV0akAYV+tH1XB1ztfHDc6hg7yZc5B61/3ZnspVhdDB/2Xm9cJOr0NwcMAhXLWQivrShMFDNox3qBx3vdRTzADmACx7Hlbaf/ROQjswNUrDnjvU+HYVTQJU7UwNFlSe94n1utJ7vvfcQYIYIO1FiiD87m88v0vMZZtLbTQQGODdhf2K3b2/wPsAEGv1I312hz3wzv9f8GcA//mTRAEQRAEQRAEQRAEQRAEQRAEQRBemL8AmuN6iuWWn1sAAAAASUVORK5CYII=" alt="">
                                
                                <h5><b>EGY</b></h5>
                            </span>
                        </div>

                        <div class="col-sm-2" style="padding-top: 7px;">
                            3
                        </div>

                        <div class="col-sm-2" style="padding-top: 7px;">
                            7
                        </div>

                        <div class="col-sm-2" style="padding-top: 7px;">
                            0
                        </div>

                        <div class="col-sm-2" style="padding-top: 7px;">
                            <b>12</b>
                        </div>
                    </div>
                </li>
                <!--// TEAM //-->`


                let content = `
                
                <!-- STANDING COL -->
                <div class="col-sm-12 col-md-6 mb-4">

                    <div class="card shadow border-none">
                        <div class="card-header bg-primary">
                        <b>${stand.group}</b>
                        </div>

                        <div class="row bg-secondary m-0">
                            <div class="col-sm-4">
                                Team
                            </div>

                            <div class="col-sm-2">
                                W
                            </div>

                            <div class="col-sm-2">
                                L
                            </div>

                            <div class="col-sm-2">
                                D
                            </div>

                            <div class="col-sm-2">
                                Pts
                            </div>
                        </div>

                        <!-- TEAMS -->
                        <ul class="list-group list-group-flush">

                            <!-- TEAM -->
                            <li class="list-group-item">

                                <div class="row">
                                    <div class="col-sm-4">
                                        <span class="flag">
                                            <img class="rounded-circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAAB1CAMAAAAP6UEOAAAAclBMVEUAAADOESb////HAADvuyL9+O389OL88t399uf779T//vz88dr78Nf66sf+/Pf99+rutwD55rv67M3zzG3tsgD22Zf44a3yxlj447X33aL004bzz3fyymfsrQD558H22JzxwUDwvjXxw0zyxl/114/0z35gg8DOAAADqklEQVR4nO2Z247jNgxAp25IXa2bx7IczzqZTPL/v1h6N9v2tQCFZgCelwQJYB4oFEkpb398L97+b4H/iPj2RXz7Ir59Ed++iG9fxLcv4tsX8e2L+PZFfPsivn0R376Ib1/Ety/i2xfx7Yv49kV8+/L25/fibfhe9PJ1qAp2eG4nX2/HtbYOD2b2DcEeL9GFAIXe2hB4A7D6aq1rQTsosxav1GCxVPqMMwSjbzDauClVN2gFiLoMrqbJ+egZ15jPVzulFFxTAjAeNRoPkNIVUCnPt8RcvrahQgcmnd61bsaMJueo30/JaKUVNssUh219wWtEA59pAU05TGlgFCzpEwylhgeuMGy+SPngI05psWN0pkQTTFjSB0avqBhzheHyDejoh9dqSacVWj5osJ7SoiJ945Bry3H5+gIOyXhNp7T5+/l8vvuN3q+oNOV18Uxx+PIBDJAyJcSpfKWDWzlROmgXgfKEKwybLxUBoHqG7sfa0ukg1frDIH1CJY2toPH5khotJcLqT0+SmQNCdBFN5ArDVn/NqFEB9bVi0t++IyKAQj2al6u/g6KCRr5q9//47urwpcrBFoXP1z99c/n8nRCl/fRVwFUdOPOXqhltN0DdpqfuV6N0OHYhdTiuMGy+gWoZoosaa33Wh3nVOpItDRZsExrjfEbZQC3ZDRs+fd1jcE65Y8exRWHM3yMXRtjrMv/ccanMS92BygbgC+Yv0PDgAYec563k99N7Ldu8Z4vgaa54xfksKoODfdTcrsVcx3JtrZ7tgB4j35mIrV+QFlCZvcxj3tpUoEx5y+P9QoWZ8gFfrV+AilqFsN8uy14e+9e07I+Sl8ttD0Hp6LgSgm2epFNQUHBXm/+o+/3+db/v9cNs6gwOmo4vNk9CNEWXAN7ZW52qOaezqVO7BRrOrKH5ITItMJOvw+KcC3kcnD63Nbcptzk/ohlMDnQeKlwnIibfnbquaXus+cjkzzyex3ylDhLcrMZmFMadJxBfPVPFj2YYK404NKSV0akAYV+tH1XB1ztfHDc6hg7yZc5B61/3ZnspVhdDB/2Xm9cJOr0NwcMAhXLWQivrShMFDNox3qBx3vdRTzADmACx7Hlbaf/ROQjswNUrDnjvU+HYVTQJU7UwNFlSe94n1utJ7vvfcQYIYIO1FiiD87m88v0vMZZtLbTQQGODdhf2K3b2/wPsAEGv1I312hz3wzv9f8GcA//mTRAEQRAEQRAEQRAEQRAEQRAEQRBemL8AmuN6iuWWn1sAAAAASUVORK5CYII=" alt="">
                                            
                                            <h5><b>EGY</b></h5>
                                        </span>
                                    </div>
        
                                    <div class="col-sm-2" style="padding-top: 7px;">
                                        3
                                    </div>
        
                                    <div class="col-sm-2" style="padding-top: 7px;">
                                        7
                                    </div>
        
                                    <div class="col-sm-2" style="padding-top: 7px;">
                                        0
                                    </div>
        
                                    <div class="col-sm-2" style="padding-top: 7px;">
                                        <b>12</b>
                                    </div>
                                </div>
                            </li>
                            <!--// TEAM //-->

                            <!-- TEAM -->
                            <li class="list-group-item">

                                <div class="row">
                                    <div class="col-sm-4">
                                        <span class="flag">
                                            <img class="rounded-circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAAB1CAMAAAAP6UEOAAAAclBMVEUAAADOESb////HAADvuyL9+O389OL88t399uf779T//vz88dr78Nf66sf+/Pf99+rutwD55rv67M3zzG3tsgD22Zf44a3yxlj447X33aL004bzz3fyymfsrQD558H22JzxwUDwvjXxw0zyxl/114/0z35gg8DOAAADqklEQVR4nO2Z247jNgxAp25IXa2bx7IczzqZTPL/v1h6N9v2tQCFZgCelwQJYB4oFEkpb398L97+b4H/iPj2RXz7Ir59Ed++iG9fxLcv4tsX8e2L+PZFfPsivn0R376Ib1/Ety/i2xfx7Yv49kV8+/L25/fibfhe9PJ1qAp2eG4nX2/HtbYOD2b2DcEeL9GFAIXe2hB4A7D6aq1rQTsosxav1GCxVPqMMwSjbzDauClVN2gFiLoMrqbJ+egZ15jPVzulFFxTAjAeNRoPkNIVUCnPt8RcvrahQgcmnd61bsaMJueo30/JaKUVNssUh219wWtEA59pAU05TGlgFCzpEwylhgeuMGy+SPngI05psWN0pkQTTFjSB0avqBhzheHyDejoh9dqSacVWj5osJ7SoiJ945Bry3H5+gIOyXhNp7T5+/l8vvuN3q+oNOV18Uxx+PIBDJAyJcSpfKWDWzlROmgXgfKEKwybLxUBoHqG7sfa0ukg1frDIH1CJY2toPH5khotJcLqT0+SmQNCdBFN5ArDVn/NqFEB9bVi0t++IyKAQj2al6u/g6KCRr5q9//47urwpcrBFoXP1z99c/n8nRCl/fRVwFUdOPOXqhltN0DdpqfuV6N0OHYhdTiuMGy+gWoZoosaa33Wh3nVOpItDRZsExrjfEbZQC3ZDRs+fd1jcE65Y8exRWHM3yMXRtjrMv/ccanMS92BygbgC+Yv0PDgAYec563k99N7Ldu8Z4vgaa54xfksKoODfdTcrsVcx3JtrZ7tgB4j35mIrV+QFlCZvcxj3tpUoEx5y+P9QoWZ8gFfrV+AilqFsN8uy14e+9e07I+Sl8ttD0Hp6LgSgm2epFNQUHBXm/+o+/3+db/v9cNs6gwOmo4vNk9CNEWXAN7ZW52qOaezqVO7BRrOrKH5ITItMJOvw+KcC3kcnD63Nbcptzk/ohlMDnQeKlwnIibfnbquaXus+cjkzzyex3ylDhLcrMZmFMadJxBfPVPFj2YYK404NKSV0akAYV+tH1XB1ztfHDc6hg7yZc5B61/3ZnspVhdDB/2Xm9cJOr0NwcMAhXLWQivrShMFDNox3qBx3vdRTzADmACx7Hlbaf/ROQjswNUrDnjvU+HYVTQJU7UwNFlSe94n1utJ7vvfcQYIYIO1FiiD87m88v0vMZZtLbTQQGODdhf2K3b2/wPsAEGv1I312hz3wzv9f8GcA//mTRAEQRAEQRAEQRAEQRAEQRAEQRBemL8AmuN6iuWWn1sAAAAASUVORK5CYII=" alt="">
                                            
                                            <h5><b>EGY</b></h5>
                                        </span>
                                    </div>
        
                                    <div class="col-sm-2" style="padding-top: 7px;">
                                        3
                                    </div>
        
                                    <div class="col-sm-2" style="padding-top: 7px;">
                                        7
                                    </div>
        
                                    <div class="col-sm-2" style="padding-top: 7px;">
                                        0
                                    </div>
        
                                    <div class="col-sm-2" style="padding-top: 7px;">
                                        <b>12</b>
                                    </div>
                                </div>
                            </li>
                            <!--// TEAM //-->

                            <!-- TEAM -->
                            <li class="list-group-item">

                                <div class="row">
                                    <div class="col-sm-4">
                                        <span class="flag">
                                            <img class="rounded-circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAAB1CAMAAAAP6UEOAAAAclBMVEUAAADOESb////HAADvuyL9+O389OL88t399uf779T//vz88dr78Nf66sf+/Pf99+rutwD55rv67M3zzG3tsgD22Zf44a3yxlj447X33aL004bzz3fyymfsrQD558H22JzxwUDwvjXxw0zyxl/114/0z35gg8DOAAADqklEQVR4nO2Z247jNgxAp25IXa2bx7IczzqZTPL/v1h6N9v2tQCFZgCelwQJYB4oFEkpb398L97+b4H/iPj2RXz7Ir59Ed++iG9fxLcv4tsX8e2L+PZFfPsivn0R376Ib1/Ety/i2xfx7Yv49kV8+/L25/fibfhe9PJ1qAp2eG4nX2/HtbYOD2b2DcEeL9GFAIXe2hB4A7D6aq1rQTsosxav1GCxVPqMMwSjbzDauClVN2gFiLoMrqbJ+egZ15jPVzulFFxTAjAeNRoPkNIVUCnPt8RcvrahQgcmnd61bsaMJueo30/JaKUVNssUh219wWtEA59pAU05TGlgFCzpEwylhgeuMGy+SPngI05psWN0pkQTTFjSB0avqBhzheHyDejoh9dqSacVWj5osJ7SoiJ945Bry3H5+gIOyXhNp7T5+/l8vvuN3q+oNOV18Uxx+PIBDJAyJcSpfKWDWzlROmgXgfKEKwybLxUBoHqG7sfa0ukg1frDIH1CJY2toPH5khotJcLqT0+SmQNCdBFN5ArDVn/NqFEB9bVi0t++IyKAQj2al6u/g6KCRr5q9//47urwpcrBFoXP1z99c/n8nRCl/fRVwFUdOPOXqhltN0DdpqfuV6N0OHYhdTiuMGy+gWoZoosaa33Wh3nVOpItDRZsExrjfEbZQC3ZDRs+fd1jcE65Y8exRWHM3yMXRtjrMv/ccanMS92BygbgC+Yv0PDgAYec563k99N7Ldu8Z4vgaa54xfksKoODfdTcrsVcx3JtrZ7tgB4j35mIrV+QFlCZvcxj3tpUoEx5y+P9QoWZ8gFfrV+AilqFsN8uy14e+9e07I+Sl8ttD0Hp6LgSgm2epFNQUHBXm/+o+/3+db/v9cNs6gwOmo4vNk9CNEWXAN7ZW52qOaezqVO7BRrOrKH5ITItMJOvw+KcC3kcnD63Nbcptzk/ohlMDnQeKlwnIibfnbquaXus+cjkzzyex3ylDhLcrMZmFMadJxBfPVPFj2YYK404NKSV0akAYV+tH1XB1ztfHDc6hg7yZc5B61/3ZnspVhdDB/2Xm9cJOr0NwcMAhXLWQivrShMFDNox3qBx3vdRTzADmACx7Hlbaf/ROQjswNUrDnjvU+HYVTQJU7UwNFlSe94n1utJ7vvfcQYIYIO1FiiD87m88v0vMZZtLbTQQGODdhf2K3b2/wPsAEGv1I312hz3wzv9f8GcA//mTRAEQRAEQRAEQRAEQRAEQRAEQRBemL8AmuN6iuWWn1sAAAAASUVORK5CYII=" alt="">
                                            
                                            <h5><b>EGY</b></h5>
                                        </span>
                                    </div>
        
                                    <div class="col-sm-2" style="padding-top: 7px;">
                                        3
                                    </div>
        
                                    <div class="col-sm-2" style="padding-top: 7px;">
                                        7
                                    </div>
        
                                    <div class="col-sm-2" style="padding-top: 7px;">
                                        0
                                    </div>
        
                                    <div class="col-sm-2" style="padding-top: 7px;">
                                        <b>12</b>
                                    </div>
                                </div>
                            </li>
                            <!--// TEAM //-->

                            <!-- TEAM -->
                            <li class="list-group-item">

                                <div class="row">
                                    <div class="col-sm-4">
                                        <span class="flag">
                                            <img class="rounded-circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAAB1CAMAAAAP6UEOAAAAclBMVEUAAADOESb////HAADvuyL9+O389OL88t399uf779T//vz88dr78Nf66sf+/Pf99+rutwD55rv67M3zzG3tsgD22Zf44a3yxlj447X33aL004bzz3fyymfsrQD558H22JzxwUDwvjXxw0zyxl/114/0z35gg8DOAAADqklEQVR4nO2Z247jNgxAp25IXa2bx7IczzqZTPL/v1h6N9v2tQCFZgCelwQJYB4oFEkpb398L97+b4H/iPj2RXz7Ir59Ed++iG9fxLcv4tsX8e2L+PZFfPsivn0R376Ib1/Ety/i2xfx7Yv49kV8+/L25/fibfhe9PJ1qAp2eG4nX2/HtbYOD2b2DcEeL9GFAIXe2hB4A7D6aq1rQTsosxav1GCxVPqMMwSjbzDauClVN2gFiLoMrqbJ+egZ15jPVzulFFxTAjAeNRoPkNIVUCnPt8RcvrahQgcmnd61bsaMJueo30/JaKUVNssUh219wWtEA59pAU05TGlgFCzpEwylhgeuMGy+SPngI05psWN0pkQTTFjSB0avqBhzheHyDejoh9dqSacVWj5osJ7SoiJ945Bry3H5+gIOyXhNp7T5+/l8vvuN3q+oNOV18Uxx+PIBDJAyJcSpfKWDWzlROmgXgfKEKwybLxUBoHqG7sfa0ukg1frDIH1CJY2toPH5khotJcLqT0+SmQNCdBFN5ArDVn/NqFEB9bVi0t++IyKAQj2al6u/g6KCRr5q9//47urwpcrBFoXP1z99c/n8nRCl/fRVwFUdOPOXqhltN0DdpqfuV6N0OHYhdTiuMGy+gWoZoosaa33Wh3nVOpItDRZsExrjfEbZQC3ZDRs+fd1jcE65Y8exRWHM3yMXRtjrMv/ccanMS92BygbgC+Yv0PDgAYec563k99N7Ldu8Z4vgaa54xfksKoODfdTcrsVcx3JtrZ7tgB4j35mIrV+QFlCZvcxj3tpUoEx5y+P9QoWZ8gFfrV+AilqFsN8uy14e+9e07I+Sl8ttD0Hp6LgSgm2epFNQUHBXm/+o+/3+db/v9cNs6gwOmo4vNk9CNEWXAN7ZW52qOaezqVO7BRrOrKH5ITItMJOvw+KcC3kcnD63Nbcptzk/ohlMDnQeKlwnIibfnbquaXus+cjkzzyex3ylDhLcrMZmFMadJxBfPVPFj2YYK404NKSV0akAYV+tH1XB1ztfHDc6hg7yZc5B61/3ZnspVhdDB/2Xm9cJOr0NwcMAhXLWQivrShMFDNox3qBx3vdRTzADmACx7Hlbaf/ROQjswNUrDnjvU+HYVTQJU7UwNFlSe94n1utJ7vvfcQYIYIO1FiiD87m88v0vMZZtLbTQQGODdhf2K3b2/wPsAEGv1I312hz3wzv9f8GcA//mTRAEQRAEQRAEQRAEQRAEQRAEQRBemL8AmuN6iuWWn1sAAAAASUVORK5CYII=" alt="">
                                            
                                            <h5><b>EGY</b></h5>
                                        </span>
                                    </div>
        
                                    <div class="col-sm-2" style="padding-top: 7px;">
                                        3
                                    </div>
        
                                    <div class="col-sm-2" style="padding-top: 7px;">
                                        7
                                    </div>
        
                                    <div class="col-sm-2" style="padding-top: 7px;">
                                        0
                                    </div>
        
                                    <div class="col-sm-2" style="padding-top: 7px;">
                                        <b>12</b>
                                    </div>
                                </div>
                            </li>
                            <!--// TEAM //-->

                        </ul>
                        <!--// TEAMS //-->
                    </div>

                </div>
                <!--// STANDING COL //-->

                `
                document.getElementById("standings").innerHTML  += content;

            }
        }
    })

}
getStandings ()