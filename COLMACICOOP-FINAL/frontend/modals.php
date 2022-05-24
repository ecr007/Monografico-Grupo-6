<div class="modal fade" id="modal-calculator" tabindex="-1" role="dialog" aria-labelledby="cal-modal-calculator">
	<div class="modal-dialog modal-sm" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="cal-modal-calculator">Calculadora de Ahorro</h4>
			</div>

			<div class="modal-body">
				<form action="#" method="post" id="calculator">
					<div class="form-group">
						<div class="form-group">
							<label for="amount">
								Cuota mensual (RD$): <span class="text-danger">(*)</span>
							</label>

							<input type="number" name="amount" id="amount" class="form-control" required>
						</div>
					</div>

					<div class="form-group">
						<div class="form-group">
							<label for="period">
								Tiempo: <span class="text-danger">(*)</span>
							</label>

							<select name="period" id="period" class="form-control" required>
								<?php 
									$j = 12;

									foreach(range(0, 5) as $i):
										

										$selected = "";
										
										if ($j == 12){
											$selected = "selected";
										}
								?>									
										
									<option value="<?=$j?>" <?=$selected?> > <?=$j?> Meses</option>
								<?php $j+= 12; endforeach; ?>
							</select>
						</div>
					</div>

					<div class="form-group">
						<div class="form-group">
							<label for="tasa">
								Tasa de interes anual:
							</label>

							<input type="text" name="tasa" id="tasa" class="form-control get-option" value="10%" readonly data-key="key" data-value="value" data-slug="tasa">
						</div>
					</div>
				</form>

				<div class="alert alert-info cal-calculator-res">
					<h3>Resultado:</h3>
					<p>RD$0.00</p>
				</div>

				<p class="help-block">
				 * Estos son valores aproximados, para mayor detalle visitar una de nuestras sucursales.</p>
			</div>
			
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
				<button type="button" class="btn btn-primary btn-cal" form="calculator">Calcular</button>
			</div>
		</div>
	</div>
</div>


<div class="modal fade" id="modal-afiliate" tabindex="-1" role="dialog" aria-labelledby="cal-modal-afiliate">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="cal-modal-afiliate">Formulario de Inscripción</h4>
			</div>

			<div class="modal-body">
				<form action="#" method="post" id="afiliate">
					<div class="form-group">
						<div class="form-group">
							<label for="af-fullname">
								Nombre Completo: <span class="text-danger">(*)</span>
							</label>

							<input type="text" name="af-fullname" id="af-fullname" class="form-control" required>
						</div>
					</div>

					<div class="form-group">
						<div class="form-group">
							<label for="af-cedula">
								Cédula: <span class="text-danger">(*)</span>
							</label>

							<input type="tel" name="af-cedula" id="af-cedula" class="form-control" required>
						</div>
					</div>

					<div class="form-group">
						<div class="form-group">
							<label for="af-phone">
								Teléfono: 
							</label>

							<input type="tel" name="af-phone" id="af-phone" class="form-control">
						</div>
					</div>

					<div class="form-group">
						<div class="form-group">
							<label for="af-celular">
								Celular: <span class="text-danger">(*)</span>
							</label>

							<input type="tel" name="af-celular" id="af-celular" class="form-control" required>
						</div>
					</div>
				</form>
			</div>
			
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
				<button type="button" class="btn btn-primary btn-register">Solicitar Inscripción</button>
			</div>
		</div>
	</div>
</div>