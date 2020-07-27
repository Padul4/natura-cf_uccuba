
		<table style="width:600px; margin-left:auto; margin-right:auto;" cellpadding="0" cellspacing="0">
			<thead>
				<tr style="height:10px;">
					<td colspan="3" style="width:600px; height:10px; background-color:#f04d38;"></td>
				</tr>
				<tr>
					<td colspan="3">
						<img src="<?php echo Router::url('/', true).'app/webroot/img/email/topo-email.jpg';?>" alt="">
					</td>
				</tr>
			</thead>
			<tbody style="background-color:#fff0d6; color:#f04d38; font-size:18px;">
				<tr style="height:46x;">
					<td style="width:600px; height:46px;" colspan="3"></td>
				</tr>
				<tr>
					<td style="width:209px;">
						<img src="<?php echo Router::url('/', true).'app/webroot/img/email/direita-nome.jpg';?>" alt="">
					</td>
					<td align="center" style="width:180px; vertical-align:middle;"> <strong>Oi, <?php echo $to['name']; ?></strong> </td>
					<td style="width:209px;">
						<img src="<?php echo Router::url('/', true).'app/webroot/img/email/esquerda-nome.jpg';?>" alt="">
					</td>
				</tr>
				<tr style="height:26x;">
					<td style="width:600px; height:26px;" colspan="3"></td>
				</tr>
				<tr>
					<td colspan="3" style="width:600px;">
						<table style="width:600px">
							<tr>
								<td style="width:114px;"></td>
								<td align="center" style="text-align:center; width:372px;">
									Sua amiga <span><?php echo $from; ?></span> chamou você para conhecer a novidade que Natura EKOS trouxe da Amazônia: aa poderosa hidratação de ucuuba. <strong>Ela Presenteou você com <span>10%</span> de desconto na compra de qualquer produto da linha.</strong> Para usar o desconto siga os passos abaixo:
								</td>
								<td style="width:114px;"></td>
							</tr>
							<tr style="height:36px;">
								<td style="width:600px; height:36px;" colspan="3"></td>
							</tr>	
						</table>	
						<table cellpadding="0" cellspacing="0" style="width:600px; background-color:#f04d38; color:#fff;">
							<tbody><tr style="height:32px;">
								<td style="width:600px; height:32px;" colspan="3"></td>
							</tr>
							<tr>
								<td rowspan="5" style="width:32px;">
								</td>
								<td rowspan="5" style="width:130px;">
									<img src="<?php echo Router::url('/', true).'app/webroot/img/email/lateral-passos.jpg';?>" alt="">
								</td>
								<td style="height: 110px;">
									Acesse o site www.rede.natura.net e selecione os produtos desejados.
								</td>
								<td rowspan="5" style="width: 50px;"></td>	
							</tr>
							<tr>
								<td style="height: 110px; padding-top: 21px;">
									Clique em concluir compra
								</td>	
							</tr>
							<tr>
								<td style="height: 160px;">
									Se você já tiver cadastro na Rede Natura, insira seu e-mail e senha nos campos apontados. Caso seja a sua primeira compra, clque em cadastre-se.
								</td>	
							</tr>
							<tr>
								<td style="height: 110px;">
									Confira o resumo da sua compra e insira o código <span><?php echo Configure::read('CUPOM_10'); ?></span> no campo cupom.
								</td>	
							</tr>
							<tr>
								<td style="padding-top: 20px;">
									Escolha a forma de pagamento e conclua a compra.
								</td>
							</tr>		
							<tr style="height:34px;">
								<td style="width:600px; height:34px;" colspan="3"></td>
							</tr>
						</tbody></table>					
					</td>
				</tr>
			</tbody>
				<tfoot>
					<tr>
						<td colspan="3">
							<img src="<?php echo Router::url('/', true).'app/webroot/img/email/footer-email.jpg';?>" alt="">
						</td>
					</tr>
				</tfoot>
			</table>