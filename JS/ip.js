//192.0.0.0 to 192.10.255.255
ip1 = 192
ip2 = 0
ip3 = 0
ip4 = 0

// while(ip3 != 11 && ip4 != 256){
    
//     while(ip4 != 256){
//         ip4 += 1
        
//         break
//     }

//     if(ip4 == 256){
//         ip3 += 1
//         ip4 = 0
//     }

//     console.log(ip1, ip2, ip3, ip4)
// }

for (let ip2 = 0; ip2 <= 10; ip2++){
    for (let ip3 = 0; ip3 <= 255; ip3++ ){
        for (let ip4 = 0; ip4 <= 255; ip4++){
            console.log(ip1 + "." + ip2 + "." + ip3 + "." + ip4)
        }
    }
}
console.log("\nIP ADDRESS PROGRAM REMI KORPORATION")