/* ==========================================================================
   RACETRACK — you don't need to edit this file.
   ---------------------------------------------------------------------------
   Draws the Circuit of the Americas (real GPS layout, bacinger/f1-circuits,
   MIT licence), the 16 grandstands and the car, then drives the car from the
   start/finish line to your latest published week.

   It reads your weeks from js/weeks.js — that's the file you update.
   ========================================================================== */
(function () {
  "use strict";

  var CIRCUIT = {"width": 1000, "height": 631, "d": "M244.2 470.3L246.7 472.2L249.1 474.1L251.5 476.1L254 478L256.4 479.9L258.8 481.8L261.2 483.7L263.6 485.6L266 487.5L268.5 489.4L270.9 491.4L273.3 493.3L275.7 495.2L278.1 497.1L280.5 499L282.9 500.9L285.4 502.8L287.8 504.7L290.2 506.6L292.6 508.6L295 510.5L297.4 512.4L299.9 514.3L302.3 516.2L304.7 518.1L307.1 520L309.5 521.9L311.9 523.9L314.3 525.8L316.8 527.7L319.2 529.6L321.7 531.5L324.3 533.3L327 535.2L329.7 537.1L332.3 538.9L335 540.8L337.7 542.6L340.2 544.4L342.6 545.9L344.9 547.4L347 548.6L349.1 549.8L351.1 551.1L353.2 552.3L355.2 553.5L357.2 554.6L359.9 556.1L362.3 557.3L364.8 558.4L366.9 559.1L369.2 558.9L371.4 558L373.1 556.3L374.3 554.2L374.8 551.8L374.2 549.3L373.2 546.1L372.2 543.3L371.2 540.3L370.1 537.3L369.1 534.3L368 531.3L367 528.3L365.9 525.3L364.9 522.3L363.8 519.3L362.8 516.3L361.7 513.3L360.7 510.3L359.6 507.3L358.6 504.3L357.6 501.4L356.6 498.6L355.7 495.8L354.7 493L353.8 490.2L352.9 487.4L351.9 484.7L351.1 482.1L350.5 479.8L349.7 476.8L349.3 474.3L349 471.9L348.8 469.7L348.8 467.4L348.8 465L348.9 462.5L349.2 460L349.6 457.5L350.1 455.1L350.8 452.4L351.6 449.5L352.7 446.6L353.9 443.8L355.3 441.3L356.7 438.8L358.2 436.5L359.8 434.2L361.6 431.8L363.6 429.4L365.7 427.2L367.9 425.3L370.3 423.6L372.9 421.9L374.8 420.7L376.8 419.4L379 418L381.4 416.5L384 414.9L386.8 413.2L389.6 411.5L392.4 409.8L395.2 408L398 406.3L400.8 404.6L403.7 402.8L406.5 401.1L409.3 399.4L412.1 397.6L414.9 395.9L417.7 394.1L420.6 392.4L423.3 390.7L425.9 389.1L428.3 387.6L430.7 386.1L433 384.7L435.3 383.3L437.6 381.8L439.9 380.4L441.9 379.1L444.4 377.3L446.1 375.7L448 373.7L449.8 371.4L451.5 369.2L453 367.2L454.4 365L455.6 362.5L456.8 359.9L457.7 357.5L458.7 354.9L459.6 352.6L460.5 350.1L461.4 347.5L462.3 345L463.3 342.7L464.4 340.8L466 338.5L467.3 336.7L468.8 334.8L470.4 333.1L472.2 331.6L474.2 330.3L476.6 328.8L478.9 327.6L481.4 326.5L483.6 325.6L486.1 324.6L488.7 323.6L491.1 322.6L493.3 321.5L495.5 320.5L498.2 319L500.5 317.5L502.3 316.2L504.3 314.3L505.9 312.5L507.3 310.4L508.6 308L509.6 305.3L510.2 302.4L510.7 299.6L511 297.4L511.4 295L511.8 292.7L512.3 289.6L512.6 287.1L513 284.6L513.5 282.1L514 279.5L514.7 277.1L515.5 275L516.6 272.5L517.9 270L519.3 267.5L520.9 265.1L522.2 263.3L524 261L525.9 258.8L527.7 257L529.7 255.2L531.9 253.4L534.1 251.7L536.5 249.9L539 248.3L541.6 246.8L544.2 245.3L546.9 244L549.6 242.8L552.3 241.8L554.9 241L557.3 240.4L559.6 240L562.3 239.8L564.8 239.8L567.1 239.8L569.6 240.2L572 240.8L574.8 241.7L576.9 242.5L579.4 243.5L582.1 244.7L584.9 246L587.6 247.3L590.4 248.5L593.1 249.8L595.9 251L598.7 252.3L601.4 253.6L604.2 254.8L607 256.1L609.7 257.4L612.5 258.6L615.3 259.9L617.7 261L619.7 261.9L622 262.9L624.1 263.5L626.4 263.8L629 263.6L631.4 262.8L633.4 261.7L636.2 260L638.4 258.6L640.8 257L643.2 255.3L645.7 253.4L648.3 251.3L650.6 249.3L652.8 247.3L654.8 245.4L656.7 243.5L658.5 241.4L660.4 239.2L662.3 236.8L664.1 234.4L665.8 232.1L667.5 230.1L668.9 228.3L671 226L673 224L674.9 222.4L676.9 221.1L678.9 219.9L681 219L683.5 218.1L685.7 217.6L688.3 217.3L690.5 217.3L692.9 217.5L695.3 217.9L697.9 218.6L700.3 219.5L702.4 220.5L704.4 221.6L706.2 223L707.8 224.5L709.7 226.4L711.3 228.3L712.8 230.4L714.3 232.7L715.4 234.7L716.6 236.7L718 238.5L719.7 240L721.9 241.2L724.3 241.8L727 241.7L730.2 241.2L733.1 240.6L736.4 239.9L739.7 239.1L743 238.4L746.4 237.7L749.7 237L753 236.2L756.3 235.5L759.6 234.8L763 234L766.3 233.3L769.6 232.6L772.9 231.8L776.2 231.1L779.6 230.4L782.9 229.6L786.2 228.9L789.5 228.2L792.9 227.5L796.2 226.7L799.5 226L802.7 225.3L805.4 224.6L807.5 224.1L809.8 223.4L812.1 222.5L814.3 221.5L816.3 220L818 218.2L820.2 215.7L822 213.4L824 211.1L825.9 208.8L827.9 206.4L829.8 204.1L831.7 201.7L833.7 199.4L835.6 197L837.6 194.7L839.5 192.3L841.5 190L843.4 187.7L845.4 185.3L847.3 183L849.2 180.6L851.2 178.3L853.1 175.9L855.1 173.6L857 171.2L859 168.9L860.9 166.6L862.9 164.2L864.9 161.8L866.9 159.4L868.9 156.9L871 154.4L873 152L875.1 149.5L877.1 147L879.2 144.6L881.2 142.1L883.3 139.7L885.3 137.2L887.4 134.7L889.4 132.3L891.5 129.8L893.5 127.3L895.6 124.9L897.7 122.4L899.7 119.9L901.8 117.5L903.8 115L905.8 112.5L907.8 110L909.8 107.6L911.7 105.1L913.7 102.6L915.7 100.1L917.6 97.6L919.5 95L921.3 92.3L923.1 89.5L924.7 86.6L926 84.1L927.3 81.4L927.8 79.1L927.5 76.7L925.9 74.9L924 73.5L921.8 72.4L919.4 72.1L917 72.3L914.5 72.9L911.8 73.7L909.4 74.4L906.5 75.4L903.5 76.3L900.4 77.3L897.4 78.3L894.3 79.2L891.3 80.2L888.2 81.2L885.2 82.1L882.1 83.1L879.1 84.1L876 85L873 86L869.9 87L866.9 87.9L863.9 88.9L860.8 89.9L857.8 90.9L854.7 91.8L851.7 92.8L848.6 93.8L845.6 94.7L842.5 95.7L839.5 96.7L836.4 97.6L833.4 98.6L830.4 99.5L827.3 100.4L824.3 101.3L821.4 102.1L818.4 103L815.4 103.8L812.4 104.6L809.5 105.5L806.5 106.3L803.5 107.1L800.6 107.9L797.6 108.8L794.6 109.6L791.6 110.4L788.7 111.3L785.7 112.1L782.7 112.9L779.7 113.7L776.8 114.6L773.8 115.4L770.8 116.2L767.7 117L764.5 117.8L761.2 118.6L757.9 119.4L754.7 120.2L751.4 121L748.1 121.8L744.8 122.6L741.5 123.4L738.3 124.2L735 124.9L731.7 125.7L728.4 126.5L725.2 127.3L721.9 128.1L718.6 128.9L715.3 129.7L712 130.5L708.8 131.3L705.5 132L702.2 132.8L698.9 133.5L695.7 134.1L692.4 134.8L689.1 135.4L685.9 136.1L682.6 136.7L679.3 137.4L676.1 138L672.8 138.7L669.6 139.3L666.3 140L663 140.6L659.8 141.3L656.5 141.9L653.2 142.6L650 143.2L646.7 143.9L643.4 144.5L640.2 145.2L636.9 145.8L633.6 146.5L630.4 147.1L627.1 147.8L624 148.4L620.8 148.9L617.8 149.4L614.7 149.9L611.6 150.4L608.6 150.9L605.5 151.4L602.4 151.9L599.4 152.4L596.3 152.9L593.2 153.4L590.2 154L587.1 154.5L584 155L581 155.5L577.9 156L575 156.4L572.1 156.9L569.2 157.3L566.4 157.7L563.6 158.1L560.7 158.5L557.9 158.9L555 159.3L552.2 159.7L549.4 160.1L546.5 160.6L543.7 161L540.9 161.4L538 161.8L535.2 162.2L532.3 162.6L529.2 163L526 163.4L522.7 163.7L519.4 164.1L516.1 164.5L512.7 164.8L509.4 165.2L506 165.6L502.7 165.9L499.4 166.3L496 166.7L492.7 167L489.3 167.4L486 167.8L482.7 168.1L479.3 168.5L476 168.9L472.7 169.2L469.3 169.6L466 170L462.6 170.3L459.3 170.7L456 171.1L452.6 171.4L449.3 171.8L445.9 172.2L442.6 172.5L439.3 172.9L435.9 173.3L432.6 173.6L429.3 174L425.9 174.3L422.6 174.7L419.2 175.1L415.9 175.4L412.6 175.8L409.2 176.2L405.9 176.5L402.5 176.9L399.5 177.3L396.8 177.6L394.5 178L391.6 178.5L388.8 179L386 179.5L383.4 180L381.3 180.6L379.7 182.2L379.2 184.5L380 186.7L381.8 189L384.1 191.7L386.2 194L388.3 196.4L390.4 198.9L392.4 201.5L394.3 204.1L396.2 206.7L398.1 209.3L400 211.8L401.9 214.4L403.8 217L405.7 219.6L407.6 222.2L409.5 224.8L411.4 227.4L413.3 230L415.2 232.6L417.1 235.2L419 237.8L420.8 240.4L422.5 243.1L424.2 245.7L425.9 248.4L427.5 251.1L429.2 253.8L430.9 256.5L432.2 258.8L433.6 261.4L434.4 263.8L434.2 266.3L433.7 268.5L432.7 270.7L431.2 272.6L429.1 274L426.8 275L424.3 275.4L421.5 275.8L418.5 275.8L415.9 275.7L412.9 275.5L409.8 275.2L406.7 275L403.6 274.7L400.5 274.5L397.9 274.2L395.1 273.8L392.9 272.9L391 271.2L389.4 269.5L387.9 267.4L386.6 264.9L385.8 262.9L384.8 260.4L383.9 257.8L382.9 255.2L382 252.7L381.1 250.5L380.3 248.4L379 245.8L377.8 243.9L376.3 241.9L374.1 239.4L372.3 237.5L370.3 235.5L368.3 233.4L366.2 231.3L364.2 229.3L362.3 227.3L360.7 225.7L359 224.1L357 222.6L354.9 221.7L352.7 221.1L350.4 220.9L347.9 220.6L344.9 220.4L341.9 220.1L338.9 219.8L336.3 219.6L334 219.6L331.6 220.1L329.7 221.6L328.4 223.7L327.9 225.9L328.5 228.5L329.6 230.8L330.7 232.9L332.2 235.4L333.8 238.1L335.3 240.7L336.8 243.4L338.4 246L339.9 248.6L341.5 251.3L343 253.9L344.6 256.6L346.1 259.2L347.7 261.9L349.2 264.5L350.7 267.2L352.3 269.8L353.8 272.5L355.4 275.1L356.9 277.7L358.5 280.4L360 283.2L361.6 286L363.2 289L364.7 291.9L366.3 294.8L367.8 297.7L369.4 300.6L370.7 303.3L371.7 305.6L372.6 308.5L373 310.9L373.1 313.3L373.1 315.7L372.9 317.9L372.5 320.7L372 323.2L371.3 325.8L370.7 327.9L369.8 330.7L369.1 332.8L368.2 335.2L367.2 337.7L366.1 340.2L365 342.8L363.8 345.3L362.7 347.4L361.3 349.9L359.6 352L357.4 354L355.4 355.5L353.3 356.8L351.1 358L348.5 359.2L346.2 360.3L343.6 361.5L340.5 362.9L337.4 364.3L334.2 365.7L331 367.1L327.9 368.6L325.1 369.8L322.7 370.7L320.1 371.6L317.6 372.1L315 372.4L312.1 372.5L309.2 372.3L307 372.2L304.7 372L302.4 371.7L300.1 371.4L297.9 371.1L295.7 370.8L293.5 370.3L291.4 369.7L289.3 369.1L287.1 368.4L284.9 367.6L282.6 366.7L280.3 365.8L278 364.9L275.8 363.8L273.6 362.7L271.6 361.5L269.6 360.3L267 358.6L264.8 357.1L262.9 355.3L261.2 353.2L259.7 350.8L258.5 349L257.1 346.9L255.4 344.5L253.6 342L251.8 339.4L250 336.9L248.2 334.4L246.3 331.8L244.5 329.3L242.7 326.8L240.9 324.3L239.1 321.7L237.3 319.2L235.5 316.7L233.6 314.1L231.8 311.6L230 309.1L228.1 306.7L226.2 304.3L224.4 302L222.5 299.6L220.6 297.2L218.7 294.9L216.8 292.5L214.9 290.2L213 287.8L211.1 285.5L209.3 283.2L207.8 281.4L206.1 279.3L204.1 277.6L202 276.4L199.6 275.6L197.4 275.1L194.7 274.9L192 275.1L189.5 275.7L187.4 276.3L185.1 277L182.6 277.8L180.2 278.6L178 279.4L175.8 280.2L172.8 281.5L170.4 282.5L167.5 283.7L164.6 285L161.7 286.3L158.8 287.6L155.8 288.8L152.9 290.1L150 291.4L147.1 292.7L144.1 293.9L141.2 295.2L138.3 296.5L135.4 297.7L132.4 299L129.5 300.3L126.6 301.6L123.7 302.8L120.7 304.1L117.8 305.4L114.9 306.7L112 307.9L109 309.2L106.1 310.5L103.2 311.8L100.3 313L97.3 314.3L94.4 315.6L91.5 316.9L88.6 318.1L85.6 319.4L83 320.6L80.8 321.7L78.2 323.2L76.3 324.6L74.6 326.3L73.3 328.5L72.5 330.7L72.4 333.2L73.3 335.1L74.8 337L76.7 338.8L79.1 340.9L81 342.4L83.4 344.3L85.8 346.3L88.3 348.2L90.7 350.2L93.2 352.1L95.6 354.1L98.1 356.1L100.5 358L103 360L105.4 362L107.9 363.9L110.4 365.9L112.8 367.8L115.3 369.8L117.7 371.8L120.2 373.7L122.6 375.7L125.1 377.7L127.6 379.7L130.2 381.7L132.9 383.8L135.5 385.8L138.2 387.9L140.8 390L143.5 392L146.1 394.1L148.8 396.1L151.5 398.2L154.1 400.3L156.8 402.3L159.4 404.4L162.1 406.4L164.7 408.5L167.4 410.6L170 412.6L172.7 414.7L175.3 416.8L178 418.8L180.7 420.9L183.3 422.9L186 425L188.6 427.1L191.3 429.1L193.9 431.2L196.6 433.2L199.2 435.3L201.9 437.4L204.5 439.4L207.2 441.5L209.9 443.6L212.5 445.6L215.2 447.7L217.8 449.7L220.5 451.8L223.1 453.9L225.8 455.9L228.4 458L231.1 460L233.7 462.1L236.4 464.2L239.1 466.2L241.7 468.3L244.2 470.3", "startFinish": {"x": 244.2, "y": 470.3, "rotation": 38.1}, "stand": {"width": 26, "height": 11}};
  var SLOTS = [{"week":1,"progress":0.05,"track":{"x":346.5,"y":548.3},"stand":{"x":338.2,"y":562,"rotation":31.3,"facing":1},"label":{"x":329,"y":577},"leader":{"x1":344.1,"y1":552.2,"x2":341.8,"y2":556}},{"week":2,"progress":0.11033,"track":{"x":357.6,"y":437.4},"stand":{"x":344.1,"y":428.8,"rotation":-57.3,"facing":-1},"label":{"x":327.8,"y":418.3},"leader":{"x1":353.8,"y1":435,"x2":350,"y2":432.6}},{"week":3,"progress":0.17067,"track":{"x":468.5,"y":335.3},"stand":{"x":456.6,"y":324.6,"rotation":-48.2,"facing":-1},"label":{"x":442.4,"y":312},"leader":{"x1":465.1,"y1":332.3,"x2":461.8,"y2":329.3}},{"week":4,"progress":0.231,"track":{"x":572.9,"y":241.1},"stand":{"x":577.3,"y":225.7,"rotation":16,"facing":-1},"label":{"x":581.6,"y":210.7},"leader":{"x1":574.1,"y1":236.7,"x2":575.3,"y2":232.4}},{"week":5,"progress":0.29133,"track":{"x":704.9,"y":222},"stand":{"x":714,"y":208.9,"rotation":34.8,"facing":-1},"label":{"x":724.2,"y":194.2},"leader":{"x1":707.4,"y1":218.3,"x2":710,"y2":214.6}},{"week":6,"progress":0.35167,"track":{"x":836.8,"y":195.6},"stand":{"x":849.1,"y":205.8,"rotation":-50.3,"facing":1},"label":{"x":863.8,"y":218},"leader":{"x1":840.3,"y1":198.5,"x2":843.8,"y2":201.3}},{"week":7,"progress":0.412,"track":{"x":924.1,"y":73.6},"stand":{"x":932.7,"y":60.1,"rotation":-147.5,"facing":1},"label":{"x":942.2,"y":45.2},"leader":{"x1":926.5,"y1":69.8,"x2":929,"y2":66}},{"week":8,"progress":0.47233,"track":{"x":775.4,"y":114.9},"stand":{"x":771.2,"y":99.5,"rotation":164.6,"facing":1},"label":{"x":767.1,"y":84.6},"leader":{"x1":774.2,"y1":110.6,"x2":773,"y2":106.3}},{"week":9,"progress":0.53267,"track":{"x":623.8,"y":148.4},"stand":{"x":620.9,"y":132.6,"rotation":169.8,"facing":1},"label":{"x":618.3,"y":118.2},"leader":{"x1":623,"y1":144,"x2":622.2,"y2":139.5}},{"week":10,"progress":0.593,"track":{"x":469.9,"y":169.5},"stand":{"x":468.2,"y":153.6,"rotation":173.7,"facing":1},"label":{"x":466.6,"y":139.6},"leader":{"x1":469.4,"y1":165.1,"x2":468.9,"y2":160.6}},{"week":11,"progress":0.65333,"track":{"x":415.9,"y":233.5},"stand":{"x":428.8,"y":224.1,"rotation":54.1,"facing":-1},"label":{"x":444.4,"y":212.8},"leader":{"x1":419.5,"y1":230.8,"x2":423.2,"y2":228.2}},{"week":12,"progress":0.71367,"track":{"x":349.4,"y":220.8},"stand":{"x":351.5,"y":204.9,"rotation":-172.2,"facing":1},"label":{"x":353.5,"y":190.7},"leader":{"x1":350,"y1":216.3,"x2":350.6,"y2":211.8}},{"week":13,"progress":0.774,"track":{"x":364.8,"y":343.3},"stand":{"x":379.2,"y":350.1,"rotation":115.2,"facing":-1},"label":{"x":396.8,"y":358.4},"leader":{"x1":368.8,"y1":345.2,"x2":372.9,"y2":347.1}},{"week":14,"progress":0.83433,"track":{"x":240,"y":323},"stand":{"x":253,"y":313.7,"rotation":-125.7,"facing":1},"label":{"x":268.6,"y":302.5},"leader":{"x1":243.7,"y1":320.4,"x2":247.3,"y2":317.8}},{"week":15,"progress":0.89467,"track":{"x":113.6,"y":307.2},"stand":{"x":107.3,"y":292.5,"rotation":156.5,"facing":1},"label":{"x":100.6,"y":277.3},"leader":{"x1":111.8,"y1":303.1,"x2":110.1,"y2":298.9}},{"week":16,"progress":0.955,"track":{"x":152.7,"y":399.2},"stand":{"x":142.9,"y":411.8,"rotation":37.8,"facing":1},"label":{"x":131.8,"y":426.2},"leader":{"x1":150,"y1":402.7,"x2":147.2,"y2":406.3}}];

  var NS = "http://www.w3.org/2000/svg";
  var START_DELAY = 550; // ms before the car leaves the line

  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function carSVG() {
    return '' +
      '<path d="M-5.6 -2.9 L-3.6 -1.6 M-5.6 2.9 L-3.6 1.6 M4.9 -2.7 L3.4 -1.2 M4.9 2.7 L3.4 1.2" stroke="var(--ink)" stroke-width="0.35"/>' +
      '<rect x="-7.4" y="-4.1" width="3.6" height="1.9" rx="0.35" fill="var(--ink)"/>' +
      '<rect x="-7.4" y="2.2" width="3.6" height="1.9" rx="0.35" fill="var(--ink)"/>' +
      '<rect x="3.6" y="-3.7" width="2.8" height="1.6" rx="0.3" fill="var(--ink)"/>' +
      '<rect x="3.6" y="2.1" width="2.8" height="1.6" rx="0.3" fill="var(--ink)"/>' +
      '<rect x="-9.2" y="-3.4" width="1.7" height="6.8" rx="0.2" fill="var(--red)"/>' +
      '<path d="M-7.4 -1.5 L-4.6 -1.7 L-2.2 -2.5 L0.8 -2.1 L2.6 -1.0 L7.6 -0.5 Q8.7 0 7.6 0.5 L2.6 1.0 L0.8 2.1 L-2.2 2.5 L-4.6 1.7 L-7.4 1.5 Z" fill="var(--red)"/>' +
      '<rect x="7.6" y="-3.5" width="1.3" height="7" rx="0.25" fill="var(--red)"/>' +
      '<ellipse cx="-0.6" cy="0" rx="1.5" ry="0.85" fill="var(--ink)"/>' +
      '<path d="M0.9 0 Q0.4 -1.1 -1.3 -1.0 M0.9 0 Q0.4 1.1 -1.3 1.0" stroke="var(--ink)" stroke-width="0.3" fill="none"/>';
  }

  function standSVG(slot, state, label, interactive) {
    var w = CIRCUIT.stand.width, h = CIRCUIT.stand.height, f = slot.stand.facing;
    var front = -f * (h / 2), back = f * (h / 2);
    var tiers = [0.28, 0.5, 0.72].map(function (t) { return front + (back - front) * t; });
    var s = '<g class="stand stand-' + state + '" data-week="' + slot.week + '" aria-label="' + esc(label) + '"' +
      (interactive ? ' role="link" tabindex="0"' : ' role="img"') + '>';
    if (slot.leader) s += '<line class="stand-leader" x1="' + slot.leader.x1 + '" y1="' + slot.leader.y1 + '" x2="' + slot.leader.x2 + '" y2="' + slot.leader.y2 + '"/>';
    s += '<circle class="stand-mark" cx="' + slot.track.x + '" cy="' + slot.track.y + '" r="1.6"/>';
    s += '<g transform="translate(' + slot.stand.x + ' ' + slot.stand.y + ') rotate(' + slot.stand.rotation + ')">';
    s += '<rect x="' + (-w / 2 - 6) + '" y="' + (-h / 2 - 6) + '" width="' + (w + 12) + '" height="' + (h + 12) + '" fill="transparent"/>';
    s += '<rect class="stand-body" x="' + (-w / 2) + '" y="' + (-h / 2) + '" width="' + w + '" height="' + h + '"/>';
    tiers.forEach(function (y) { s += '<line class="stand-tier" x1="' + (-w / 2 + 1.5) + '" x2="' + (w / 2 - 1.5) + '" y1="' + y + '" y2="' + y + '"/>'; });
    s += '<line class="stand-tier" x1="' + (-w / 6) + '" x2="' + (-w / 6) + '" y1="' + front + '" y2="' + back + '"/>';
    s += '<line class="stand-tier" x1="' + (w / 6) + '" x2="' + (w / 6) + '" y1="' + front + '" y2="' + back + '"/>';
    s += '<line class="stand-roof" x1="' + (-w / 2) + '" x2="' + (w / 2) + '" y1="' + back + '" y2="' + back + '"/>';
    s += '<rect class="stand-focus" x="' + (-w / 2 - 3) + '" y="' + (-h / 2 - 3) + '" width="' + (w + 6) + '" height="' + (h + 6) + '"/>';
    s += '</g><text class="stand-label" x="' + slot.label.x + '" y="' + (slot.label.y + 2.8) + '" text-anchor="middle">W' + pad(slot.week) + '</text></g>';
    return s;
  }

  function cubicBezier(x1, y1, x2, y2) {
    function bx(t) { return 3 * x1 * t * (1 - t) * (1 - t) + 3 * x2 * t * t * (1 - t) + t * t * t; }
    function by(t) { return 3 * y1 * t * (1 - t) * (1 - t) + 3 * y2 * t * t * (1 - t) + t * t * t; }
    return function (x) {
      var lo = 0, hi = 1;
      for (var i = 0; i < 40; i++) { var m = (lo + hi) / 2; if (bx(m) < x) lo = m; else hi = m; }
      return by((lo + hi) / 2);
    };
  }

  function init() {
    var host = document.getElementById("racetrack");
    if (!host) return;
    var A = window.LIVING_ARCHIVE || { totalWeeks: 16, weeks: [] };
    var root = document.body.getAttribute("data-root") || "";
    var weeks = A.weeks.filter(function (w) { return w.published !== false; }).sort(function (a, b) { return a.week - b.week; });
    var byWeek = {};
    weeks.forEach(function (w) { byWeek[w.week] = w; });
    var latest = weeks.length ? weeks[weeks.length - 1].week : 0;
    var slots = SLOTS.slice(0, A.totalWeeks);
    var sf = CIRCUIT.startFinish;

    // ---- draw ----
    var s = '<svg class="racetrack" viewBox="0 0 ' + CIRCUIT.width + ' ' + CIRCUIT.height + '" role="group" aria-label="Circuit of the Americas. ' + weeks.length + ' of ' + A.totalWeeks + ' weeks published.">';
    s += '<path d="' + CIRCUIT.d + '" fill="none" stroke="var(--ink)" stroke-opacity="0.78" stroke-width="8.8" stroke-linejoin="round" stroke-linecap="round"/>';
    s += '<path d="' + CIRCUIT.d + '" fill="none" stroke="var(--paper)" stroke-width="7.4" stroke-linejoin="round"/>';
    s += '<path d="' + CIRCUIT.d + '" fill="none" stroke="var(--ink)" stroke-width="0.45" stroke-dasharray="1.5 3.5" stroke-opacity="0.3"/>';
    s += '<path class="track-path" d="' + CIRCUIT.d + '" fill="none" stroke="none"/>';
    s += '<g transform="translate(' + sf.x + ' ' + sf.y + ') rotate(' + sf.rotation + ')" aria-hidden="true">';
    [-4, -2, 0, 2].forEach(function (y, r) {
      [0, 1].forEach(function (c) {
        s += '<rect x="' + (-2 + c * 2) + '" y="' + y + '" width="2" height="2" fill="' + ((r + c) % 2 ? "var(--ink)" : "var(--paper)") + '" stroke="var(--ink)" stroke-width="0.25"/>';
      });
    });
    s += '</g><text class="track-meta" x="' + (sf.x - 14) + '" y="' + (sf.y + 3) + '" text-anchor="end" aria-hidden="true">S/F</text>';
    slots.forEach(function (slot) {
      var w = byWeek[slot.week];
      s += standSVG(slot, w ? "published" : "future", w ? "Week " + slot.week + ": " + w.title + ", " + w.date : "Week " + slot.week + ", upcoming", !!w);
    });
    s += '<g class="car" aria-hidden="true" transform="translate(' + sf.x + ' ' + sf.y + ') rotate(' + sf.rotation + ')">' + carSVG() + '</g>';
    s += '</svg>';
    host.innerHTML = s;

    var svg = host.querySelector("svg");
    var path = svg.querySelector(".track-path");
    var car = svg.querySelector(".car");
    var stands = Array.prototype.slice.call(svg.querySelectorAll(".stand"));
    var tip = null;

    function hrefFor(w) { return root + "weeks/" + w.slug + ".html"; }

    // ---- grandstand interactions ----
    stands.forEach(function (g, i) {
      var wk = i + 1, w = byWeek[wk];
      function show() {
        hide();
        var st = slots[i].stand;
        tip = document.createElement("div");
        tip.className = "track-tip";
        tip.setAttribute("role", "tooltip");
        tip.style.left = (st.x / CIRCUIT.width) * 100 + "%";
        tip.style.top = (st.y / CIRCUIT.height) * 100 + "%";
        tip.innerHTML = '<div><p class="meta muted">W' + pad(wk) + (w ? " — " + esc(w.date) : " — Upcoming") + "</p>" + (w ? '<p class="track-tip-title">' + esc(w.title) + "</p>" : "") + "</div>";
        host.appendChild(tip);
      }
      function hide() { if (tip) { tip.remove(); tip = null; } }
      g.addEventListener("mouseenter", show);
      g.addEventListener("mouseleave", hide);
      if (w) {
        g.addEventListener("focus", show);
        g.addEventListener("blur", hide);
        g.addEventListener("click", function () { location.href = hrefFor(w); });
        g.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); location.href = hrefFor(w); }
        });
      }
    });

    function setState(passed, arrived) {
      stands.forEach(function (g, i) {
        var wk = i + 1;
        if (!byWeek[wk]) return;
        g.classList.toggle("stand-passed", wk <= passed && wk !== latest);
        if (wk === latest) {
          g.classList.toggle("stand-current", arrived);
          g.classList.toggle("stand-published", !arrived);
        }
      });
    }

    // ---- the drive ----
    var L = path.getTotalLength();
    function place(d) {
      var p = path.getPointAtLength(d);
      var a = path.getPointAtLength(Math.max(0, d - 2.5));
      var b = path.getPointAtLength(Math.min(L, d + 2.5));
      var deg = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
      car.setAttribute("transform", "translate(" + p.x.toFixed(2) + " " + p.y.toFixed(2) + ") rotate(" + deg.toFixed(2) + ")");
    }
    place(0);
    if (!latest) return;

    var dest = slots[latest - 1].progress * L;
    var marks = slots.slice(0, latest).map(function (g) { return g.progress * L; });

    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) {
      place(dest); setState(latest, true); return;
    }

    // speed from curvature: brake into corners, accelerate on straights
    var N = 900, ds = L / N, head = [], i, j;
    for (i = 0; i <= N; i++) {
      var pa = path.getPointAtLength(Math.max(0, i * ds - ds)), pb = path.getPointAtLength(Math.min(L, i * ds + ds));
      head.push(Math.atan2(pb.y - pa.y, pb.x - pa.x));
    }
    var curv = head.map(function (hd, k) {
      if (!k) return 0;
      var d = Math.abs(hd - head[k - 1]); if (d > Math.PI) d = 2 * Math.PI - d; return d / ds;
    });
    var win = Math.round(14 / ds);
    var smooth = curv.map(function (_, k) {
      var t = 0, n = 0;
      for (j = k - win; j <= k + win; j++) if (j >= 0 && j <= N) { t += curv[j]; n++; }
      return t / n;
    });
    var raw = smooth.map(function (k) { return Math.max(0.38, 1 / (1 + k * 22)); });
    var look = Math.round(40 / ds);
    var speed = raw.map(function (_, k) {
      var m = raw[k];
      for (j = k; j <= Math.min(N, k + look); j++) m = Math.min(m, raw[j] + (j - k) * 0.012);
      return m;
    });
    var T = [0];
    for (i = 1; i <= N; i++) T.push(T[i - 1] + ds / ((speed[i] + speed[i - 1]) / 2));
    function timeAt(d) { var f = Math.min(N, d / ds), k = Math.floor(f); return k >= N ? T[N] : T[k] + (T[k + 1] - T[k]) * (f - k); }
    function distAt(t) {
      var lo = 0, hi = N;
      while (hi - lo > 1) { var m = (lo + hi) >> 1; if (T[m] <= t) lo = m; else hi = m; }
      return (lo + (t - T[lo]) / (T[hi] - T[lo] || 1)) * ds;
    }
    var tDest = timeAt(dest);
    var duration = Math.min(6, Math.max(2.4, 1.6 + 4.6 * (dest / L))) * 1000;
    var ease = cubicBezier(0.5, 0, 0.22, 1);
    var reached = 0, start = null;

    function frame(now) {
      if (start === null) start = now;
      var u = Math.min(1, (now - start) / duration);
      var d = Math.min(dest, distAt(ease(u) * tDest));
      place(d);
      var n = reached;
      while (n < marks.length && marks[n] <= d + 0.5) n++;
      if (n !== reached) { reached = n; setState(n, false); }
      if (u < 1) requestAnimationFrame(frame);
      else { place(dest); setState(latest, true); }
    }
    setTimeout(function () { requestAnimationFrame(frame); }, START_DELAY);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  // replay when the page is restored from the back/forward cache
  window.addEventListener("pageshow", function (e) { if (e.persisted) init(); });
})();
