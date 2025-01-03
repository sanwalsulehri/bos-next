import React from 'react'

const Agency = () => {
  return (


    <div className="bg-gray-100 p-0 md:p-2">

      <div className="mx-4 md:mx-auto md:max-w-7xl px-2 pt-20 text-center">

        <h1 className="mb-4 text-[28px] md:text-[40px] lg:text-[48px] font-semibold md:leading-[56px] text-gray-900">
          Your Agency's Scalable<br />
          Growth Starts Here
        </h1>


        <p className="mb-8 text-lg text-gray-600">
          Try Productive out for 14 days, free. Then choose the plan that<br />
          suits you best. <span className="text-blue-500">(All prices listed are in US dollars.)</span>
        </p>


        <div className="relative mb-16  inline-flex  mt-20 items-center rounded-full bg-white p-1">

          <button className="z-10 rounded-full bg-blue-500 px-8 py-2.5 font-medium text-white">Monthly</button>


          <button className="rounded-full px-8 py-2.5 font-medium text-gray-600">Quarterly</button>


          <div className="absolute md:-right-48 right-20 md:-top-6 -top-10 flex   md:rotate-0 -translate-y-1/2 items-center">
            <svg className='md:block hidden' width="195" height="36" viewBox="0 0 195 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 14.0001C14.5911 16.0489 5.23444 25.2233 1 34M1 34C1 25.2 1 24.3333 1 25V34ZM1 34L8.64444 32" stroke="black" stroke-width="2" />
              <path d="M65.8107 19.24C65.0374 19.24 64.3507 19.16 63.7507 19C63.1507 18.8267 62.6307 18.5933 62.1907 18.3C61.7507 17.9933 61.3907 17.66 61.1107 17.3C60.8307 16.9267 60.624 16.5333 60.4907 16.12L62.1107 15.56C62.3107 16.1467 62.7107 16.66 63.3107 17.1C63.924 17.5267 64.6707 17.74 65.5507 17.74C66.6307 17.74 67.4774 17.5267 68.0907 17.1C68.704 16.6733 69.0107 16.1067 69.0107 15.4C69.0107 14.7467 68.7374 14.22 68.1907 13.82C67.644 13.4067 66.924 13.0867 66.0307 12.86L64.4907 12.46C63.864 12.3 63.284 12.0667 62.7507 11.76C62.2307 11.44 61.8107 11.04 61.4907 10.56C61.184 10.0667 61.0307 9.48 61.0307 8.8C61.0307 7.53333 61.4374 6.54667 62.2507 5.84C63.0774 5.12 64.264 4.76 65.8107 4.76C66.7307 4.76 67.524 4.91333 68.1907 5.22C68.8574 5.51333 69.3974 5.89333 69.8107 6.36C70.2374 6.81333 70.5374 7.30667 70.7107 7.84L69.1107 8.4C68.8574 7.73333 68.4307 7.21333 67.8307 6.84C67.2307 6.45333 66.504 6.26 65.6507 6.26C64.7574 6.26 64.044 6.48 63.5107 6.92C62.9907 7.34667 62.7307 7.93333 62.7307 8.68C62.7307 9.32 62.9374 9.81333 63.3507 10.16C63.764 10.4933 64.304 10.74 64.9707 10.9L66.5107 11.28C67.8707 11.6 68.9107 12.1333 69.6307 12.88C70.364 13.6133 70.7307 14.4067 70.7307 15.26C70.7307 15.9933 70.544 16.6667 70.1707 17.28C69.7974 17.88 69.244 18.36 68.5107 18.72C67.7907 19.0667 66.8907 19.24 65.8107 19.24ZM79.3159 19L79.2359 17.36V13.72C79.2359 12.9333 79.1492 12.2867 78.9759 11.78C78.8025 11.26 78.5292 10.8667 78.1559 10.6C77.7825 10.3333 77.2959 10.2 76.6959 10.2C76.1492 10.2 75.6759 10.3133 75.2759 10.54C74.8892 10.7533 74.5692 11.1 74.3159 11.58L72.8759 11.02C73.1292 10.5533 73.4359 10.1533 73.7959 9.82C74.1559 9.47333 74.5759 9.21333 75.0559 9.04C75.5359 8.85333 76.0825 8.76 76.6959 8.76C77.6292 8.76 78.3959 8.94667 78.9959 9.32C79.6092 9.68 80.0692 10.22 80.3759 10.94C80.6825 11.6467 80.8292 12.5267 80.8159 13.58L80.7959 19H79.3159ZM76.3159 19.24C75.1425 19.24 74.2225 18.9733 73.5559 18.44C72.9025 17.8933 72.5759 17.14 72.5759 16.18C72.5759 15.1667 72.9092 14.3933 73.5759 13.86C74.2559 13.3133 75.2025 13.04 76.4159 13.04H79.2759V14.38H76.7759C75.8425 14.38 75.1759 14.5333 74.7759 14.84C74.3892 15.1467 74.1959 15.5867 74.1959 16.16C74.1959 16.68 74.3892 17.0933 74.7759 17.4C75.1625 17.6933 75.7025 17.84 76.3959 17.84C76.9692 17.84 77.4692 17.72 77.8959 17.48C78.3225 17.2267 78.6492 16.8733 78.8759 16.42C79.1159 15.9533 79.2359 15.4067 79.2359 14.78H79.9159C79.9159 16.14 79.6092 17.2267 78.9959 18.04C78.3825 18.84 77.4892 19.24 76.3159 19.24ZM86.2549 19L90.3349 9H92.0149L87.8349 19H86.2549ZM86.1549 19L81.9749 9H83.6349L87.7149 19H86.1549ZM97.7312 19.24C96.7578 19.24 95.8978 19.02 95.1512 18.58C94.4045 18.1267 93.8178 17.5067 93.3912 16.72C92.9778 15.9333 92.7712 15.0267 92.7712 14C92.7712 12.9733 92.9778 12.0667 93.3912 11.28C93.8178 10.4933 94.3978 9.88 95.1312 9.44C95.8778 8.98667 96.7312 8.76 97.6912 8.76C98.6245 8.76 99.4312 8.99333 100.111 9.46C100.791 9.91333 101.318 10.5533 101.691 11.38C102.065 12.2067 102.251 13.18 102.251 14.3H93.9912L94.3912 13.96C94.3912 14.76 94.5312 15.4467 94.8112 16.02C95.1045 16.5933 95.5112 17.0333 96.0312 17.34C96.5512 17.6333 97.1445 17.78 97.8112 17.78C98.5178 17.78 99.1112 17.6133 99.5912 17.28C100.085 16.9467 100.465 16.5067 100.731 15.96L102.111 16.66C101.858 17.18 101.518 17.6333 101.091 18.02C100.678 18.4067 100.185 18.7067 99.6112 18.92C99.0512 19.1333 98.4245 19.24 97.7312 19.24ZM94.4912 13.28L94.0712 12.96H100.971L100.551 13.3C100.551 12.66 100.425 12.1067 100.171 11.64C99.9178 11.1733 99.5778 10.8133 99.1512 10.56C98.7245 10.3067 98.2312 10.18 97.6712 10.18C97.1245 10.18 96.6045 10.3067 96.1112 10.56C95.6312 10.8133 95.2378 11.1733 94.9312 11.64C94.6378 12.0933 94.4912 12.64 94.4912 13.28ZM116.071 19L115.971 17.16V9H117.571V19H116.071ZM108.951 14.12V9H110.551V14.12H108.951ZM110.551 14.12C110.551 15.1067 110.664 15.86 110.891 16.38C111.117 16.9 111.431 17.26 111.831 17.46C112.244 17.6467 112.704 17.74 113.211 17.74C114.077 17.74 114.751 17.4267 115.231 16.8C115.724 16.1733 115.971 15.3 115.971 14.18H116.751C116.751 15.2333 116.597 16.14 116.291 16.9C115.984 17.66 115.537 18.24 114.951 18.64C114.377 19.04 113.671 19.24 112.831 19.24C112.057 19.24 111.377 19.0867 110.791 18.78C110.204 18.46 109.751 17.96 109.431 17.28C109.111 16.5867 108.951 15.6933 108.951 14.6V14.12H110.551ZM120.463 23V9H121.963L122.063 10.84V23H120.463ZM125.443 19.24C124.603 19.24 123.863 19.02 123.223 18.58C122.596 18.14 122.11 17.5267 121.763 16.74C121.416 15.94 121.243 15.0267 121.243 14C121.243 12.96 121.416 12.0467 121.763 11.26C122.11 10.4733 122.596 9.86 123.223 9.42C123.863 8.98 124.603 8.76 125.443 8.76C126.336 8.76 127.123 8.98 127.803 9.42C128.483 9.86 129.01 10.4733 129.383 11.26C129.77 12.0467 129.963 12.96 129.963 14C129.963 15.0267 129.77 15.94 129.383 16.74C129.01 17.5267 128.483 18.14 127.803 18.58C127.123 19.02 126.336 19.24 125.443 19.24ZM125.083 17.78C125.71 17.78 126.263 17.62 126.743 17.3C127.236 16.98 127.623 16.5333 127.903 15.96C128.196 15.3867 128.343 14.7333 128.343 14C128.343 13.2667 128.203 12.6133 127.923 12.04C127.656 11.4667 127.276 11.02 126.783 10.7C126.29 10.38 125.73 10.22 125.103 10.22C124.516 10.22 123.99 10.38 123.523 10.7C123.07 11.02 122.71 11.4667 122.443 12.04C122.19 12.6133 122.063 13.2667 122.063 14C122.063 14.7333 122.19 15.3867 122.443 15.96C122.71 16.5333 123.07 16.98 123.523 17.3C123.976 17.62 124.496 17.78 125.083 17.78ZM135.939 19.24C134.966 19.24 134.213 18.9867 133.679 18.48C133.146 17.9733 132.879 17.26 132.879 16.34V5.88H134.479V16.18C134.479 16.6867 134.613 17.08 134.879 17.36C135.159 17.6267 135.546 17.76 136.039 17.76C136.199 17.76 136.353 17.74 136.499 17.7C136.659 17.6467 136.866 17.5267 137.119 17.34L137.739 18.64C137.393 18.8667 137.079 19.02 136.799 19.1C136.519 19.1933 136.233 19.24 135.939 19.24ZM131.139 10.42V9H137.479V10.42H131.139ZM144.099 19.24C143.126 19.24 142.259 19.02 141.499 18.58C140.753 18.1267 140.166 17.5067 139.739 16.72C139.313 15.9333 139.099 15.0267 139.099 14C139.099 12.9733 139.306 12.0667 139.719 11.28C140.146 10.4933 140.733 9.88 141.479 9.44C142.239 8.98667 143.099 8.76 144.059 8.76C145.046 8.76 145.913 8.98667 146.659 9.44C147.419 9.88 148.006 10.4933 148.419 11.28C148.846 12.0667 149.059 12.9733 149.059 14C149.059 15.0267 148.846 15.9333 148.419 16.72C148.006 17.5067 147.426 18.1267 146.679 18.58C145.933 19.02 145.073 19.24 144.099 19.24ZM144.099 17.76C144.766 17.76 145.346 17.6 145.839 17.28C146.333 16.96 146.719 16.52 146.999 15.96C147.293 15.4 147.439 14.7467 147.439 14C147.439 13.2533 147.293 12.6 146.999 12.04C146.719 11.48 146.326 11.04 145.819 10.72C145.313 10.4 144.726 10.24 144.059 10.24C143.406 10.24 142.826 10.4 142.319 10.72C141.826 11.04 141.433 11.48 141.139 12.04C140.859 12.6 140.719 13.2533 140.719 14C140.719 14.7333 140.859 15.3867 141.139 15.96C141.433 16.52 141.833 16.96 142.339 17.28C142.859 17.6 143.446 17.76 144.099 17.76ZM155.962 19V17.6C155.962 17.16 156.049 16.7267 156.222 16.3C156.409 15.86 156.669 15.4267 157.002 15C157.349 14.5733 157.769 14.1733 158.262 13.8L161.162 11.62C161.509 11.38 161.809 11.1067 162.062 10.8C162.329 10.48 162.536 10.1533 162.682 9.82C162.829 9.47333 162.902 9.14 162.902 8.82C162.902 8.35333 162.789 7.93333 162.562 7.56C162.336 7.17333 162.016 6.86667 161.602 6.64C161.189 6.41333 160.702 6.3 160.142 6.3C159.596 6.3 159.116 6.40667 158.702 6.62C158.289 6.82 157.949 7.09333 157.682 7.44C157.416 7.77333 157.222 8.13333 157.102 8.52L155.382 8.18C155.542 7.58 155.829 7.02 156.242 6.5C156.669 5.98 157.209 5.56 157.862 5.24C158.516 4.92 159.242 4.76 160.042 4.76C160.976 4.76 161.782 4.94 162.462 5.3C163.142 5.64667 163.669 6.12667 164.042 6.74C164.429 7.34 164.622 8.02667 164.622 8.8C164.622 9.53333 164.422 10.2267 164.022 10.88C163.622 11.5333 163.042 12.1667 162.282 12.78L159.542 14.86C159.009 15.26 158.596 15.68 158.302 16.12C158.022 16.56 157.862 17.02 157.822 17.5H164.822V19H155.962ZM172.394 19.24C171.327 19.24 170.381 18.9333 169.554 18.32C168.727 17.6933 168.081 16.84 167.614 15.76C167.147 14.6667 166.914 13.4133 166.914 12C166.914 10.5867 167.147 9.34 167.614 8.26C168.081 7.16667 168.721 6.31333 169.534 5.7C170.361 5.07333 171.314 4.76 172.394 4.76C173.474 4.76 174.421 5.07333 175.234 5.7C176.061 6.31333 176.707 7.16667 177.174 8.26C177.654 9.34 177.894 10.5867 177.894 12C177.894 13.4133 177.661 14.6667 177.194 15.76C176.727 16.84 176.081 17.6933 175.254 18.32C174.427 18.9333 173.474 19.24 172.394 19.24ZM172.394 17.72C173.141 17.72 173.801 17.4733 174.374 16.98C174.961 16.4867 175.414 15.8133 175.734 14.96C176.067 14.1067 176.234 13.12 176.234 12C176.234 10.88 176.067 9.89333 175.734 9.04C175.414 8.17333 174.961 7.5 174.374 7.02C173.801 6.52667 173.141 6.28 172.394 6.28C171.647 6.28 170.987 6.52667 170.414 7.02C169.841 7.5 169.387 8.17333 169.054 9.04C168.734 9.89333 168.574 10.88 168.574 12C168.574 13.12 168.734 14.1067 169.054 14.96C169.387 15.8133 169.841 16.4867 170.414 16.98C171.001 17.4733 171.661 17.72 172.394 17.72ZM180.747 19L190.687 5H192.547L182.547 19H180.747ZM190.447 19.32C189.847 19.32 189.307 19.18 188.827 18.9C188.36 18.6067 187.993 18.2133 187.727 17.72C187.473 17.2133 187.347 16.64 187.347 16C187.347 15.3467 187.473 14.7733 187.727 14.28C187.993 13.7867 188.36 13.4 188.827 13.12C189.307 12.8267 189.847 12.68 190.447 12.68C191.06 12.68 191.6 12.8267 192.067 13.12C192.533 13.4 192.9 13.7867 193.167 14.28C193.433 14.7733 193.567 15.3467 193.567 16C193.567 16.64 193.433 17.2133 193.167 17.72C192.9 18.2133 192.533 18.6067 192.067 18.9C191.6 19.18 191.06 19.32 190.447 19.32ZM190.447 18.04C190.967 18.04 191.387 17.8467 191.707 17.46C192.027 17.0733 192.187 16.5867 192.187 16C192.187 15.4133 192.027 14.9267 191.707 14.54C191.387 14.1533 190.967 13.96 190.447 13.96C189.953 13.96 189.54 14.1533 189.207 14.54C188.887 14.9267 188.727 15.4133 188.727 16C188.727 16.5867 188.887 17.0733 189.207 17.46C189.54 17.8467 189.953 18.04 190.447 18.04ZM182.867 11.32C182.253 11.32 181.713 11.18 181.247 10.9C180.78 10.6067 180.413 10.2133 180.147 9.72C179.88 9.21333 179.747 8.64 179.747 8C179.747 7.34667 179.88 6.77333 180.147 6.28C180.413 5.78667 180.78 5.4 181.247 5.12C181.713 4.82667 182.253 4.68 182.867 4.68C183.48 4.68 184.02 4.82667 184.487 5.12C184.953 5.4 185.32 5.78667 185.587 6.28C185.853 6.77333 185.987 7.34667 185.987 8C185.987 8.64 185.853 9.21333 185.587 9.72C185.32 10.2133 184.953 10.6067 184.487 10.9C184.02 11.18 183.48 11.32 182.867 11.32ZM182.867 10.04C183.373 10.04 183.787 9.84667 184.107 9.46C184.427 9.07333 184.587 8.58667 184.587 8C184.587 7.41333 184.427 6.92667 184.107 6.54C183.787 6.15333 183.373 5.96 182.867 5.96C182.373 5.96 181.96 6.15333 181.627 6.54C181.307 6.92667 181.147 7.41333 181.147 8C181.147 8.58667 181.307 9.07333 181.627 9.46C181.96 9.84667 182.373 10.04 182.867 10.04Z" fill="#33AF82" />
            </svg>

            <svg
              className='md:hidden block'
              xmlns="http://www.w3.org/2000/svg"
              width="191"
              height="34"
              fill="none"
              viewBox="0 0 191 34"
            >
              <path
                stroke="#000"
                strokeWidth="2"
                d="M147 12c29.409 2.049 38.766 11.223 43 20m0 0v-9zm0 0-7.644-2"
              ></path>
              <path
                fill="#003824"
                d="M6.81 19.24q-1.16 0-2.06-.24a5.6 5.6 0 0 1-1.56-.7q-.66-.46-1.08-1a4 4 0 0 1-.62-1.18l1.62-.56q.3.88 1.2 1.54.92.64 2.24.64 1.62 0 2.54-.64t.92-1.7q0-.98-.82-1.58-.819-.62-2.16-.96l-1.54-.4a6.9 6.9 0 0 1-1.74-.7q-.78-.48-1.26-1.2-.46-.74-.46-1.76 0-1.9 1.22-2.96 1.24-1.08 3.56-1.08 1.38 0 2.38.46 1 .44 1.62 1.14.64.68.9 1.48l-1.6.56a3.07 3.07 0 0 0-1.28-1.56q-.9-.58-2.18-.58-1.34 0-2.14.66-.78.64-.78 1.76 0 .96.62 1.48.621.5 1.62.74l1.54.38q2.04.48 3.12 1.6 1.1 1.1 1.1 2.38 0 1.1-.56 2.02-.56.9-1.66 1.44-1.08.52-2.7.52M20.317 19l-.08-1.64v-3.64q0-1.18-.26-1.94-.26-.78-.82-1.18t-1.46-.4q-.82 0-1.42.34-.58.32-.96 1.04l-1.44-.56q.38-.7.92-1.2.54-.52 1.26-.78.72-.28 1.64-.28 1.4 0 2.3.56.92.54 1.38 1.62.46 1.06.44 2.64l-.02 5.42zm-3 .24q-1.76 0-2.76-.8-.98-.82-.98-2.26 0-1.52 1-2.32 1.02-.82 2.84-.82h2.86v1.34h-2.5q-1.4 0-2 .46-.58.46-.58 1.32 0 .78.58 1.24.58.44 1.62.44.86 0 1.5-.36.64-.38.98-1.06.36-.7.36-1.64h.68q0 2.04-.92 3.26-.92 1.2-2.68 1.2m9.939-.24 4.08-10h1.68l-4.18 10zm-.1 0-4.18-10h1.66l4.08 10zm11.576.24q-1.46 0-2.58-.66a4.8 4.8 0 0 1-1.76-1.86q-.62-1.18-.62-2.72t.62-2.72a4.7 4.7 0 0 1 1.74-1.84q1.12-.68 2.56-.68 1.4 0 2.42.7 1.02.68 1.58 1.92t.56 2.92h-8.26l.4-.34q0 1.2.42 2.06.44.86 1.22 1.32.78.44 1.78.44 1.06 0 1.78-.5a3.3 3.3 0 0 0 1.14-1.32l1.38.7q-.38.78-1.02 1.36a4.4 4.4 0 0 1-1.48.9q-.84.32-1.88.32m-3.24-5.96-.42-.32h6.9l-.42.34q0-.96-.38-1.66a2.75 2.75 0 0 0-1.02-1.08q-.64-.38-1.48-.38a3.4 3.4 0 0 0-1.56.38q-.72.38-1.18 1.08-.44.68-.44 1.64M57.071 19l-.1-1.84V9h1.6v10zm-7.12-4.88V9h1.6v5.12zm1.6 0q0 1.48.34 2.26t.94 1.08q.62.28 1.38.28 1.3 0 2.02-.94.74-.94.74-2.62h.78q0 1.58-.46 2.72t-1.34 1.74q-.86.6-2.12.6-1.161 0-2.04-.46-.88-.48-1.36-1.5-.48-1.04-.48-2.68v-.48zM61.463 23V9h1.5l.1 1.84V23zm4.98-3.76q-1.26 0-2.22-.66-.94-.66-1.46-1.84-.52-1.2-.52-2.74 0-1.56.52-2.74t1.46-1.84q.96-.66 2.22-.66 1.34 0 2.36.66t1.58 1.84q.58 1.18.58 2.74 0 1.54-.58 2.74-.56 1.18-1.58 1.84t-2.36.66m-.36-1.46q.94 0 1.66-.48.74-.48 1.16-1.34.44-.86.44-1.96t-.42-1.96a3.13 3.13 0 0 0-1.14-1.34 3 3 0 0 0-1.68-.48q-.88 0-1.58.48-.68.48-1.08 1.34-.38.86-.38 1.96t.38 1.96q.4.86 1.08 1.34t1.56.48m10.856 1.46q-1.46 0-2.26-.76t-.8-2.14V5.88h1.6v10.3q0 .76.4 1.18.42.4 1.16.4.24 0 .46-.06.24-.08.62-.36l.62 1.3q-.52.34-.94.46-.42.14-.86.14m-4.8-8.82V9h6.34v1.42zm12.96 8.82q-1.46 0-2.6-.66a4.8 4.8 0 0 1-1.76-1.86q-.64-1.18-.64-2.72t.62-2.72a4.7 4.7 0 0 1 1.76-1.84q1.14-.68 2.58-.68 1.48 0 2.6.68a4.5 4.5 0 0 1 1.76 1.84q.64 1.18.64 2.72t-.64 2.72a4.7 4.7 0 0 1-1.74 1.86q-1.119.66-2.58.66m0-1.48q1 0 1.74-.48T88 15.96q.44-.84.44-1.96T88 12.04q-.42-.84-1.18-1.32t-1.76-.48q-.98 0-1.74.48-.74.48-1.18 1.32-.42.84-.42 1.96 0 1.1.42 1.96.441.84 1.2 1.32.78.48 1.76.48M96.962 19v-1.4q0-.66.26-1.3.28-.66.78-1.3a7.2 7.2 0 0 1 1.26-1.2l2.9-2.18q.52-.36.9-.82.4-.48.62-.98.22-.52.22-1 0-.7-.34-1.26a2.44 2.44 0 0 0-.96-.92q-.62-.34-1.46-.34-.819 0-1.44.32-.62.3-1.02.82-.4.5-.58 1.08l-1.72-.34q.24-.9.86-1.68a4.8 4.8 0 0 1 1.62-1.26q.98-.48 2.18-.48 1.4 0 2.42.54 1.02.52 1.58 1.44.58.9.58 2.06 0 1.1-.6 2.08t-1.74 1.9l-2.74 2.08q-.8.6-1.24 1.26-.42.66-.48 1.38h7V19zm16.432.24q-1.6 0-2.84-.92-1.24-.94-1.94-2.56-.7-1.64-.7-3.76t.7-3.74q.7-1.64 1.92-2.56 1.24-.94 2.86-.94t2.84.94q1.24.92 1.94 2.56.72 1.62.72 3.74t-.7 3.76q-.7 1.62-1.94 2.56-1.24.92-2.86.92m0-1.52q1.12 0 1.98-.74.88-.74 1.36-2.02.5-1.28.5-2.96t-.5-2.96q-.48-1.3-1.36-2.02a2.95 2.95 0 0 0-1.98-.74q-1.12 0-1.98.74-.86.72-1.36 2.02-.48 1.28-.48 2.96t.48 2.96q.5 1.28 1.36 2.02.88.74 1.98.74m8.353 1.28 9.94-14h1.86l-10 14zm9.7.32q-.9 0-1.62-.42a3.1 3.1 0 0 1-1.1-1.18q-.38-.76-.38-1.72 0-.98.38-1.72.4-.74 1.1-1.16.72-.44 1.62-.44.92 0 1.62.44.7.42 1.1 1.16t.4 1.72q0 .96-.4 1.72a3.13 3.13 0 0 1-1.1 1.18q-.7.42-1.62.42m0-1.28q.78 0 1.26-.58t.48-1.46-.48-1.46-1.26-.58q-.74 0-1.24.58-.48.58-.48 1.46t.48 1.46q.5.58 1.24.58m-7.58-6.72q-.921 0-1.62-.42a3.1 3.1 0 0 1-1.1-1.18q-.4-.76-.4-1.72 0-.98.4-1.72t1.1-1.16q.699-.44 1.62-.44.92 0 1.62.44.7.42 1.1 1.16t.4 1.72q0 .96-.4 1.72a3.13 3.13 0 0 1-1.1 1.18q-.7.42-1.62.42m0-1.28q.76 0 1.24-.58t.48-1.46-.48-1.46a1.54 1.54 0 0 0-1.24-.58q-.74 0-1.24.58-.48.58-.48 1.46t.48 1.46q.5.58 1.24.58"
              ></path>
            </svg>

          </div>
        </div>
      </div>
    </div>


  )
}

export default Agency