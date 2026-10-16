/**
 * Enes Öztürk - HTML Dersi 3. Ödev
 * Google 1998 İlk Sürümünün (Wayback Machine) Birebir HTML Tasarımı
 * Bu dosya, ödevde talep edilen tüm açıklama satırlarını ve standart HTML yapısını içerir.
 */

export const RAW_HTML_CODE = `<!DOCTYPE html>
<html lang="tr">
<head>
    <!-- Belge Karakter Seti: Türkçe karakterlerin düzgün görünmesi için UTF-8 tanımlanır -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Sayfa Başlığı: 1998 yılı orijinal Google başlığı ve Öğrenci İmzası -->
    <title>Google! - Enes Öztürk HTML Ödevi</title>
    
    <!-- Sayfa Açıklaması ve Yazar Bilgisi -->
    <meta name="author" content="Enes Öztürk">
    <meta name="description" content="Google'ın 1998 yılındaki ilk ana sayfasının Enes Öztürk tarafından hazırlanan HTML ödev tasarımı.">
    
    <!-- İç Stil Tanımları (1998 Orijinal Web Standartları) -->
    <style>
        body {
            background-color: #FFFFFF;
            color: #000000;
            font-family: "Times New Roman", Times, serif;
            margin: 20px;
        }
        
        /* 1998 Yılı Klasik Mavi Altı Çizgili Link Stili */
        a {
            color: #0000CC;
            text-decoration: underline;
        }
        
        a:visited {
            color: #551A8B;
        }
        
        a:active {
            color: #FF0000;
        }
        
        /* Arama Kutusu ve Buton Biçimlendirmeleri */
        input[type="text"] {
            font-family: monospace, sans-serif;
            font-size: 14px;
            padding: 2px 4px;
        }
        
        input[type="submit"] {
            font-size: 13px;
            padding: 2px 8px;
            cursor: pointer;
            margin: 2px;
        }
        
        /* Enes Öztürk Ödev İmza Alanı */
        .signature-box {
            margin-top: 25px;
            padding: 8px;
            background-color: #F0F4F8;
            border: 1px dashed #70CCC2;
            text-align: center;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 12px;
            color: #333333;
        }
    </style>
</head>
<body>

    <!-- ========================================== -->
    <!-- 1. BÖLÜM: 1998 GOOGLE! LOGOSU              -->
    <!-- ========================================== -->
    <!-- Orijinal 1998 Google logosu ortalanmış şekilde sunulmaktadır. -->
    <center>
        <!-- Logo resmi: Alternatif metin (alt) ve boyutlar tanımlanmıştır -->
        <img src="https://web.archive.org/web/19981202230410im_/http://www.google.com/google.jpg" 
             alt="Google! 1998 Orijinal Logosu" 
             width="351" 
             height="113"
             onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_1998_logo.svg'">
    </center>

    <br>

    <!-- ========================================== -->
    <!-- 2. BÖLÜM: ANA İÇERİK VE ARAMA TABLOSU      -->
    <!-- ========================================== -->
    <!-- 1998 web tasarımında div'ler yerine table etiketleri kullanılmaktaydı. -->
    <center>
        <table border="0" width="90%" cellspacing="0" cellpadding="6">
            
            <!-- ARAMA FORMU SATIRI (Arka Plan: Gri #EEEEEE) -->
            <tr>
                <td bgcolor="#EEEEEE" colspan="3" align="center">
                    <!-- Arama formu: Form alanı kullanıcıdan metin girişi alır -->
                    <form action="https://www.google.com/search" method="GET" target="_blank">
                        <font size="3">Search the web using Google!</font>
                        <br>
                        <!-- Arama giriş kutusu (size="40" karakter genişliği) -->
                        <input type="text" name="q" value="" size="40" autofocus>
                        <br>
                        <!-- Arama ve Şanslı Hissediyorum butonları -->
                        <input type="submit" name="btnG" value="Google Search">
                        <input type="submit" name="btnI" value="I'm feeling lucky">
                    </form>
                </td>
            </tr>

            <!-- 3 KOLONLU ALT BÖLÜM (Renkli Hücreler) -->
            <tr>
                <!-- SOL KOLON: ÖZEL ARAMALAR (#7EE5DA Açık Turkuaz) -->
                <td width="33%" bgcolor="#7EE5DA" align="center" valign="top">
                    <font size="2">
                        <b>Special Searches</b><br>
                        <a href="https://www.stanford.edu" target="_blank">Stanford Search</a><br>
                        <a href="https://www.kernel.org" target="_blank">Linux Search</a>
                    </font>
                </td>

                <!-- ORTA KOLON: BİLGİ VE YARDIM LİNKLERİ (#70CCC2 Orta Turkuaz) -->
                <td width="33%" bgcolor="#70CCC2" align="center" valign="top">
                    <font size="2">
                        <a href="#help">Help!</a><br>
                        <a href="https://tr.wikipedia.org/wiki/Google" target="_blank">About Google!</a><br>
                        <a href="#company">Company Info</a><br>
                        <a href="#logos">Google! Logos</a>
                    </font>
                </td>

                <!-- SAĞ KOLON: AYLIK E-POSTA BÜLTENİ (#62B3AA Koyu Turkuaz) -->
                <td width="33%" bgcolor="#62B3AA" align="center" valign="top">
                    <font size="2">
                        Get Google!<br>
                        updates monthly:
                        <br>
                        <!-- E-posta Abonelik Formu -->
                        <form action="#" method="POST" onsubmit="alert('1998 Google Friends e-posta bültenine kaydınız alındı!'); return false;">
                            <input type="hidden" name="listname" value="google-friends">
                            <input type="text" name="emailaddr" value="your e-mail" onfocus="if(this.value=='your e-mail')this.value='';" size="15">
                            <br>
                            <input type="submit" name="SubmitAction" value="Subscribe"> 
                            &nbsp;&nbsp;
                            <a href="https://web.archive.org/web/19981202230410/http://www.google.com/" target="_blank">Archive</a>
                        </form>
                    </font>
                </td>
            </tr>

        </table>
    </center>

    <br>

    <!-- ========================================== -->
    <!-- 3. BÖLÜM: TELİF HAKKI VE ENES ÖZTÜRK İMZASI-->
    <!-- ========================================== -->
    <center>
        <font size="-1">
            Copyright &copy;1998 Google Inc.
        </font>
    </center>

    <!-- Ödev Teslim ve Öğrenci İmzası Bölümü -->
    <div class="signature-box">
        <strong>Ödev Sahibi / Tasarlayan:</strong> Enes Öztürk &bull; 
        <strong>Konu:</strong> HTML Bölümü 3. Ödev - Google 1998 Ana Sayfası &bull; 
        <strong>Tarih:</strong> 1998 &amp; 2026
    </div>

</body>
</html>`;
